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
let currentIndex = 0;
let userAnswers = [];
let startTime;
let timerInterval;
let resultsChartInstance = null;

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

// Inicialización
async function init() {
    try {
        if (typeof QUESTIONS_DATA !== 'undefined') {
            questions = QUESTIONS_DATA;
            console.log('Preguntas cargadas:', questions.length);
        } else {
            console.error('No se encontró QUESTIONS_DATA.');
            alert('Error: No se pudieron cargar las preguntas.');
        }
    } catch (error) {
        console.error('Error inicializando datos:', error);
    }
}

// Iniciar Examen
function startQuiz() {
    currentIndex = 0;
    userAnswers = [];
    startScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    startTimer();
    renderQuestion();
}

// Timer
function startTimer() {
    timerDisplay.textContent = "00:00";
    timerInterval = setInterval(() => {
        const diff = Date.now() - startTime;
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Renderizar Pregunta
function renderQuestion() {
    if (currentIndex >= questions.length) {
        showResults();
        return;
    }

    const q = questions[currentIndex];
    questionText.textContent = q.question;
    optionsList.innerHTML = '';
    feedbackContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    skipBtn.classList.remove('hidden');

    prevBtn.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';

    questionNumber.textContent = `Pregunta ${currentIndex + 1}/${questions.length}`;
    progressBarFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

    q.options.forEach((opt, index) => {
        const letter = String.fromCharCode(97 + index);
        const div = document.createElement('div');
        div.className = 'option-item';
        div.setAttribute('data-letter', letter);
        div.textContent = opt;

        const existingAns = userAnswers[currentIndex];
        if (existingAns && !existingAns.omitted) {
            if (opt === q.answer) div.classList.add('correct-reveal');
            else if (opt === existingAns.answer) div.classList.add('incorrect-reveal');
            div.style.cursor = 'default';
        } else {
            div.onclick = () => selectOption(div, opt);
        }

        optionsList.appendChild(div);
    });

    if (userAnswers[currentIndex]) {
        if (!userAnswers[currentIndex].omitted) {
            revealFeedback(userAnswers[currentIndex].isCorrect, q.explanation, q.source_reference);
            nextBtn.classList.remove('hidden');
            skipBtn.classList.add('hidden');
        }
    }
}

// Seleccionar Opción
function selectOption(element, selectedText) {
    if (!feedbackContainer.classList.contains('hidden')) return;

    const q = questions[currentIndex];
    const isCorrect = selectedText === q.answer;

    // Asignar dominio dinámicamente
    const chapterMatch = q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0";
    const domainName = getDomainForChapter(chapterMatch);

    userAnswers[currentIndex] = {
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
    const q = questions[currentIndex];
    const chapterMatch = q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0";
    const domainName = getDomainForChapter(chapterMatch);

    userAnswers[currentIndex] = {
        questionId: q.id,
        omitted: true,
        isCorrect: false,
        domain: domainName
    };

    currentIndex++;
    renderQuestion();
}

// Navegación
nextBtn.onclick = () => {
    currentIndex++;
    renderQuestion();
};

prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
};

skipBtn.onclick = skipQuestion;

finishBtn.onclick = () => {
    if (confirm('¿Estás seguro de que quieres finalizar el examen ahora? Se mostrarán los resultados de las preguntas respondidas hasta el momento.')) {
        showResults();
    }
};

// Mostrar Resultados
function showResults() {
    clearInterval(timerInterval);
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const total = questions.length;
    const answered = userAnswers.filter(a => a && !a.omitted);
    const correct = answered.filter(a => a.isCorrect).length;
    const omitted = total - answered.length;

    const percentage = Math.round((correct / total) * 100);

    document.getElementById('final-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = `(${correct}/${total})`;
    document.getElementById('correct-val').textContent = correct;
    document.getElementById('omitted-val').textContent = omitted;
    const timeTaken = Math.floor((Date.now() - startTime) / 60000);
    document.getElementById('time-taken').textContent = `${timeTaken} min`;

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
restartBtn.onclick = () => {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
};

init();
