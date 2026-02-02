// Map de Capítulos a Dominios CompTIA Network+
const DOMAIN_MAPPING = {
    "1.0 Conceptos de Redes": {
        chapters: [1, 2, 3, 4, 5, 6],
        description: "Modelos OSI, TCP/IP, Direccionamiento, Protocolos y Topologías."
    },
    "2.0 Implementación de Redes": {
        chapters: [7, 8, 9, 10, 11],
        description: "Dispositivos, Tecnologías Inalámbricas y Almacenamiento."
    },
    "3.0 Operaciones de Red": {
        chapters: [12, 13, 14, 15],
        description: "Monitoreo, Gestión, Documentación y Políticas de Red."
    },
    "4.0 Seguridad de Red": {
        chapters: [16, 17, 18],
        description: "Seguridad física/lógica, Ataques y Autenticación."
    },
    "5.0 Solución de Problemas": {
        chapters: [19, 20],
        description: "Diagnóstico, Herramientas y Recuperación ante Desastres."
    }
};

function getDomainForChapter(chapterName) {
    const match = chapterName.match(/Capítulo (\d+)/i);
    if (match) {
        const chapterNum = parseInt(match[1]);
        for (const [domain, data] of Object.entries(DOMAIN_MAPPING)) {
            if (data.chapters.includes(chapterNum)) return domain;
        }
    }
    return "Otros Temas";
}

// Variables de estado
let questions = [];
let filteredQuestions = [];
let currentFilter = 'all';
let currentIndex = 0;
let userAnswers = [];
let sessionStartTime;
let totalElapsedTime = 0; // Tiempo acumulado en ms
let timerInterval;
let resultsChartInstance = null;
let isPaused = false;

// Selectores DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const skipBtn = document.getElementById('skip-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');
const pauseBtn = document.getElementById('pause-btn');
const pauseOverlay = document.getElementById('pause-overlay');
const resumeExamBtn = document.getElementById('resume-exam-btn');

// Protecciones de Inicialización
const isDataLoaded = () => filteredQuestions && filteredQuestions.length > 0;

function updateFilteredQuestions(domain) {
    currentFilter = domain;
    if (domain === 'all') {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => {
            const qChapter = q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0";
            return getDomainForChapter(qChapter) === domain;
        });
    }
}

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackMessage = document.getElementById('feedback-message');
const chapterRef = document.getElementById('chapter-ref');
const sourceText = document.getElementById('source-text');
const explanationText = document.getElementById('explanation-text');
const questionNumber = document.getElementById('question-number');
const progressBarFill = document.getElementById('progress-bar-fill');
const timerDisplay = document.getElementById('timer');
const questionGrid = document.getElementById('question-grid');
const domainFilter = document.getElementById('domain-filter');

// Inicialización
async function init() {
    try {
        if (typeof QUESTIONS_DATA !== 'undefined') {
            questions = QUESTIONS_DATA;
            updateFilteredQuestions('all'); // Inicialmente todas
            console.log('Preguntas cargadas:', questions.length);
            checkPreviousSession();
        } else {
            console.error('No se encontró QUESTIONS_DATA.');
            alert('Error: No se pudieron cargar las preguntas.');
        }
    } catch (error) {
        console.error('Error inicializando datos:', error);
    }

    // Listener para el filtro de dominios
    if (domainFilter) {
        domainFilter.addEventListener('change', (e) => {
            applyDomainFilter(e.target.value);
        });
    }
}

function applyDomainFilter(domain) {
    // Si estamos en medio de un examen, guardar progreso antes de filtrar
    if (quizScreen.classList.contains('active')) {
        saveProgress();
    }

    updateFilteredQuestions(domain);
    currentIndex = 0; // Reiniciar al inicio del nuevo subset

    if (quizScreen.classList.contains('active')) {
        renderQuestion();
        renderQuestionList();
    }
}

function checkPreviousSession() {
    const savedState = localStorage.getItem('network_plus_exam_state');
    if (savedState) {
        resumeExamBtn.classList.remove('hidden');
    }
}

// Iniciar Examen
function startQuiz() {
    if (!isDataLoaded()) {
        console.error('No hay preguntas cargadas.');
        return;
    }
    currentIndex = 0;
    userAnswers = [];
    totalElapsedTime = 0;
    isPaused = false;
    localStorage.removeItem('network_plus_exam_state');
    startScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    if (timerInterval) clearInterval(timerInterval);
    sessionStartTime = Date.now();
    startTimer();
    renderQuestion();
}

function loadExamSession() {
    const savedState = localStorage.getItem('network_plus_exam_state');
    if (savedState) {
        const state = JSON.parse(savedState);
        userAnswers = state.userAnswers || [];
        totalElapsedTime = state.totalElapsedTime || 0;
        isPaused = state.isPaused || false;

        // Restaurar filtro antes de renderizar
        const savedFilter = state.currentFilter || 'all';
        if (domainFilter) domainFilter.value = savedFilter;
        updateFilteredQuestions(savedFilter);

        currentIndex = state.currentIndex || 0;

        startScreen.classList.remove('active');
        resultsScreen.classList.remove('active');
        quizScreen.classList.add('active');

        if (isPaused) {
            pauseOverlay.classList.remove('hidden');
            pauseBtn.textContent = '▶️';
            renderTime(totalElapsedTime);
        } else {
            sessionStartTime = Date.now();
            startTimer();
        }
        renderQuestion();
        renderQuestionList();
    }
}

// Cargar Progreso (Opcional, pero implementamos guardado persistente)
function saveProgress() {
    const state = {
        currentIndex,
        currentFilter,
        userAnswers,
        totalElapsedTime: totalElapsedTime + (isPaused ? 0 : (sessionStartTime ? (Date.now() - sessionStartTime) : 0)),
        isPaused
    };
    localStorage.setItem('network_plus_exam_state', JSON.stringify(state));
}

// Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const currentSessionDist = Date.now() - sessionStartTime;
        renderTime(totalElapsedTime + currentSessionDist);
    }, 1000);
}

function renderTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function pauseExam() {
    if (isPaused) return;
    isPaused = true;
    clearInterval(timerInterval);
    totalElapsedTime += (Date.now() - sessionStartTime);
    pauseOverlay.classList.remove('hidden');
    pauseBtn.textContent = '▶️';
    saveProgress();
}

function resumeExam() {
    if (!isPaused) return;
    isPaused = false;
    sessionStartTime = Date.now();
    pauseOverlay.classList.add('hidden');
    pauseBtn.textContent = '⏸️';
    startTimer();
    saveProgress();
}

function togglePause() {
    if (isPaused) resumeExam();
    else pauseExam();
}

// Nueva: Renderizar lista de navegación lateral
function renderQuestionList() {
    if (!questionGrid) return;
    questionGrid.innerHTML = '';

    filteredQuestions.forEach((q, index) => {
        const chip = document.createElement('div');
        chip.className = 'q-chip';

        // Mantenemos el número original para referencia, pero el flujo es del subset
        const originalIndex = questions.indexOf(q);
        chip.textContent = originalIndex + 1;

        // Determinar estado visual
        if (index === currentIndex) {
            chip.classList.add('current');
        } else if (userAnswers[originalIndex]) {
            if (userAnswers[originalIndex].isCorrect) {
                chip.classList.add('correct');
            } else if (!userAnswers[originalIndex].omitted) {
                chip.classList.add('incorrect');
            }
        }

        chip.onclick = () => jumpToQuestion(index);
        questionGrid.appendChild(chip);
    });
}

// Nueva: Saltar a una pregunta específica
function jumpToQuestion(index) {
    if (index === currentIndex) return;
    currentIndex = index;
    renderQuestion();
}

// Nueva: Filtrar sidebar
function filterSidebarByDomain(selectedDomain) {
    renderQuestionList();
}

// Renderizar Pregunta
function renderQuestion() {
    if (!isDataLoaded()) {
        console.error('Render abortado: No hay preguntas.');
        return;
    }
    if (currentIndex >= filteredQuestions.length) {
        showResults();
        return;
    }

    const q = filteredQuestions[currentIndex];
    questionText.textContent = q.question;
    optionsList.innerHTML = '';

    // Actualizar sidebar para marcar la actual
    renderQuestionList();
    feedbackContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    skipBtn.classList.remove('hidden');

    prevBtn.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';

    const originalIndex = questions.indexOf(q);
    const totalSelected = filteredQuestions.length;
    const filterText = currentFilter !== 'all' ? ` [${currentFilter}]` : '';
    questionNumber.textContent = `Pregunta ${currentIndex + 1}/${totalSelected}${filterText}`;
    progressBarFill.style.width = `${((currentIndex + 1) / totalSelected) * 100}%`;

    q.options.forEach((opt, index) => {
        const letter = String.fromCharCode(97 + index);
        const div = document.createElement('div');
        div.className = 'option-item';
        div.setAttribute('data-letter', letter);
        div.textContent = opt;

        const existingAns = userAnswers[originalIndex];
        if (existingAns && !existingAns.omitted) {
            if (opt === q.answer) div.classList.add('correct-reveal');
            else if (opt === existingAns.answer) div.classList.add('incorrect-reveal');
            div.style.cursor = 'default';
        } else {
            div.onclick = () => selectOption(div, opt);
        }

        optionsList.appendChild(div);
    });

    if (userAnswers[originalIndex]) {
        if (!userAnswers[originalIndex].omitted) {
            revealFeedback(userAnswers[originalIndex].isCorrect, q.explanation, q.source_reference);
            nextBtn.classList.remove('hidden');
            skipBtn.classList.add('hidden');
        } else {
            // Si fue omitida, mostrar botón siguiente pero ocultar feedback
            nextBtn.classList.remove('hidden');
            skipBtn.classList.add('hidden');
        }
    }
}

// Seleccionar Opción
function selectOption(element, selectedText) {
    if (!feedbackContainer.classList.contains('hidden')) return;

    const q = filteredQuestions[currentIndex];
    const originalIndex = questions.indexOf(q);
    const isCorrect = selectedText === q.answer;

    // Asignar dominio dinámicamente
    const chapterMatch = q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0";
    const domainName = getDomainForChapter(chapterMatch);

    userAnswers[originalIndex] = {
        questionId: q.id,
        answer: selectedText,
        isCorrect: isCorrect,
        domain: domainName,
        omitted: false
    };

    const items = optionsList.querySelectorAll('.option-item');
    items.forEach(item => {
        item.style.cursor = 'default';
        if (item.textContent === q.answer) {
            item.classList.add('correct-reveal');
        } else if (item === element && !isCorrect) {
            item.classList.add('incorrect-reveal');
        }
    });

    revealFeedback(isCorrect, q.explanation, q.source_reference);
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
    saveProgress();
}

function revealFeedback(isCorrect, explanation, source) {
    feedbackContainer.classList.remove('hidden');
    feedbackContainer.className = `feedback-container ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackMessage.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';

    const chapter = source ? source.split('>')[0].split(':')[0].trim() : 'Ref';
    chapterRef.textContent = chapter;
    sourceText.textContent = source || 'Sin referencia';

    explanationText.textContent = explanation;
}

// Saltar Pregunta
function skipQuestion() {
    const q = filteredQuestions[currentIndex];
    const originalIndex = questions.indexOf(q);
    const chapterMatch = q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0";
    const domainName = getDomainForChapter(chapterMatch);

    userAnswers[originalIndex] = {
        questionId: q.id,
        omitted: true,
        isCorrect: false,
        domain: domainName
    };

    saveProgress();
    currentIndex++;
    renderQuestion();
}

// Navegación
nextBtn.onclick = () => {
    currentIndex++;
    // Si llegamos al final de filtradas, se llamará a showResults en el siguiente render
    saveProgress();
    renderQuestion();
};

prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        saveProgress();
        renderQuestion();
    }
};

skipBtn.onclick = skipQuestion;

// Usamos una función dedicada para procesar el cierre
function finishExamEarly() {
    if (confirm('¿Estás seguro de que quieres finalizar el examen ahora? Se calculará tu puntaje actual.')) {
        // Aseguramos que todas las preguntas hasta el momento se guarden
        saveProgress();
        showResults();
    }
}

finishBtn.onclick = finishExamEarly;

// Mostrar Resultados
function showResults() {
    if (!isPaused && sessionStartTime) {
        totalElapsedTime += (Date.now() - sessionStartTime);
    }
    clearInterval(timerInterval);
    isPaused = false;
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    localStorage.removeItem('network_plus_exam_state');

    const isFilterActive = currentFilter !== 'all';
    const activeSet = isFilterActive ? filteredQuestions : questions;
    const total = activeSet.length;

    if (total === 0) {
        console.error("Error: Intentando mostrar resultados sin preguntas.");
        document.getElementById('final-percentage').textContent = "0%";
        return;
    }

    // Rellenamos los huecos en userAnswers para preguntas del set activo
    activeSet.forEach(q => {
        const originalIdx = questions.indexOf(q);
        if (!userAnswers[originalIdx]) {
            const domainName = getDomainForChapter(q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0");
            userAnswers[originalIdx] = {
                questionId: q.id,
                omitted: true,
                isCorrect: false,
                domain: domainName
            };
        }
    });

    const activeUserAnswers = activeSet.map(q => userAnswers[questions.indexOf(q)]);
    const answered = activeUserAnswers.filter(a => a && !a.omitted);
    const correct = answered.filter(a => a.isCorrect).length;
    const omitted = total - answered.length;

    const percentage = Math.round((correct / total) * 100);

    const resultTitle = isFilterActive ? `Resultados: ${currentFilter}` : "Resultados Finales";
    document.querySelector('#results-screen h2').textContent = resultTitle;

    document.getElementById('final-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = `(${correct}/${total})`;
    document.getElementById('correct-val').textContent = correct;
    document.getElementById('omitted-val').textContent = omitted;
    const minutesTaken = Math.floor(totalElapsedTime / 60000);
    document.getElementById('time-taken').textContent = `${minutesTaken} min`;

    renderChart(correct, answered.length - correct, omitted);
    renderDomainProgress();
}

function renderChart(correct, incorrect, omitted) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    if (resultsChartInstance) resultsChartInstance.destroy();

    resultsChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correcto', 'Incorrecto', 'Omitido'],
            datasets: [{
                data: [correct, incorrect, omitted],
                backgroundColor: ['#22c55e', '#ef4444', '#cbd5e1'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
            plugins: { legend: { display: false } },
            animation: { animateScale: true }
        }
    });
}

function renderDomainProgress() {
    const domainsList = document.getElementById('domains-list');
    domainsList.innerHTML = '';

    const stats = {};
    Object.keys(DOMAIN_MAPPING).forEach(d => {
        stats[d] = { total: 0, correct: 0, incorrect: 0, omitted: 0 };
    });

    userAnswers.forEach(ans => {
        if (!ans || !stats[ans.domain]) return;
        stats[ans.domain].total++;
        if (ans.omitted) stats[ans.domain].omitted++;
        else if (ans.isCorrect) stats[ans.domain].correct++;
        else stats[ans.domain].incorrect++;
    });

    Object.entries(stats).forEach(([name, data], index) => {
        if (data.total === 0) return;

        const correctPct = Math.round((data.correct / data.total) * 100);
        const incorrectPct = Math.round((data.incorrect / data.total) * 100);
        const omittedPct = 100 - correctPct - incorrectPct;

        const description = DOMAIN_MAPPING[name].description;
        const domainClass = `domain-${index + 1}`;

        const domainItem = document.createElement('div');
        domainItem.className = `domain-item ${domainClass}`;
        domainItem.innerHTML = `
            <div class="domain-info">
                <span class="domain-name">${name}</span>
                <span class="domain-desc">${description}</span>
            </div>
            <div class="domain-progress-bar">
                <div class="bar-segment correct" style="width: ${correctPct}%">${correctPct > 5 ? correctPct + '%' : ''}</div>
                <div class="bar-segment incorrect" style="width: ${incorrectPct}%">${incorrectPct > 5 ? incorrectPct + '%' : ''}</div>
                <div class="bar-segment omitted" style="width: ${omittedPct}%">${omittedPct > 5 ? omittedPct + '%' : ''}</div>
            </div>
            <div class="badge-container">
                <span class="stat-badge">Total: ${data.total}</span>
                <span class="stat-badge">✅ ${data.correct}</span>
                <span class="stat-badge">❌ ${data.incorrect}</span>
            </div>
        `;
        domainsList.appendChild(domainItem);
    });
}

startBtn.onclick = startQuiz;
resumeExamBtn.onclick = loadExamSession;
pauseBtn.onclick = togglePause;

restartBtn.onclick = () => {
    localStorage.removeItem('network_plus_exam_state');
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    resumeExamBtn.classList.add('hidden');
};

init();
