// Variables de estado
let questions = [];
let currentIndex = 0;
let userAnswers = [];
let startTime;
let timerInterval;
let resultsChartInstance = null; // Instancia del gráfico para destruirla antes de recrearla

// Selectores DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const skipBtn = document.getElementById('skip-btn');
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
        // En lugar de fetch (que da error CORS local), usamos la variable global QUESTIONS_DATA
        if (typeof QUESTIONS_DATA !== 'undefined') {
            questions = QUESTIONS_DATA;
            console.log('Preguntas cargadas:', questions.length);
        } else {
            console.error('No se encontró QUESTIONS_DATA. Asegúrate de que questions_data.js está cargado.');
            alert('Error: No se pudieron cargar las preguntas localmente.');
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

    // Limpiar cualquier intervalo previo
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

    // Estado del botón "Atrás"
    prevBtn.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';

    // Update progress
    questionNumber.textContent = `Pregunta ${currentIndex + 1}/${questions.length}`;
    progressBarFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

    q.options.forEach((opt, index) => {
        const letter = String.fromCharCode(97 + index);
        const div = document.createElement('div');
        div.className = 'option-item';
        div.setAttribute('data-letter', letter);
        div.textContent = opt;

        // Si ya fue respondida, mostrar el estado
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

    // Si ya fue respondida o saltada, mostrar feedback
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
    if (!feedbackContainer.classList.contains('hidden')) return; // Bloquear si ya se respondió

    const q = questions[currentIndex];
    const isCorrect = selectedText === q.answer;

    // Extraer Dominio de forma más robusta
    let domainName = 'General';
    if (q.source_reference) {
        const parts = q.source_reference.split('>');
        if (parts.length > 0) {
            domainName = parts[0].trim();
            // Si el nombre es muy largo (ej: Capítulo 19...), podemos truncarlo o limpiarlo
            domainName = domainName.replace(/Capítulo \d+:\s*/i, '');
        }
    }

    userAnswers[currentIndex] = {
        questionId: q.id,
        answer: selectedText,
        isCorrect: isCorrect,
        domain: domainName,
        omitted: false
    };

    // UI Feedback
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

    // Extraer capítulo explícitamente para el badge
    const chapter = source ? source.split('>')[0].split(':')[0].trim() : 'Ref';
    chapterRef.textContent = chapter;
    sourceText.textContent = source || 'Sin referencia';

    explanationText.textContent = explanation;
}

// Saltar Pregunta
function skipQuestion() {
    const q = questions[currentIndex];

    // Extraer Dominio
    let domainName = 'General';
    if (q.source_reference) {
        const parts = q.source_reference.split('>');
        domainName = parts[0].trim().replace(/Capítulo \d+:\s*/i, '');
    }

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

    if (resultsChartInstance) {
        resultsChartInstance.destroy();
    }

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
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            },
            animation: { animateScale: true }
        }
    });
}

function renderDomainProgress() {
    const domainsList = document.getElementById('domains-list');
    domainsList.innerHTML = '';

    const domains = {};
    userAnswers.forEach(ans => {
        if (!ans) return;
        if (!domains[ans.domain]) domains[ans.domain] = { total: 0, correct: 0, incorrect: 0, omitted: 0 };
        domains[ans.domain].total++;
        if (ans.omitted) domains[ans.domain].omitted++;
        else if (ans.isCorrect) domains[ans.domain].correct++;
        else domains[ans.domain].incorrect++;
    });

    for (const [name, stats] of Object.entries(domains)) {
        const correctPct = Math.round((stats.correct / stats.total) * 100);
        const incorrectPct = Math.round((stats.incorrect / stats.total) * 100);
        const omittedPct = 100 - correctPct - incorrectPct;

        const domainItem = document.createElement('div');
        domainItem.className = 'domain-item';
        domainItem.innerHTML = `
            <div class="domain-info">
                <span>${name} (${stats.total} preguntas)</span>
            </div>
            <div class="domain-progress-bar">
                <div class="bar-segment correct" style="width: ${correctPct}%">${correctPct > 0 ? correctPct + '%' : ''}</div>
                <div class="bar-segment incorrect" style="width: ${incorrectPct}%">${incorrectPct > 0 ? incorrectPct + '%' : ''}</div>
                <div class="bar-segment omitted" style="width: ${omittedPct}%" title="Omitido">${omittedPct > 0 ? omittedPct + '%' : ''}</div>
            </div>
        `;
        domainsList.appendChild(domainItem);
    }
}

// Event Listeners
startBtn.onclick = startQuiz;
restartBtn.onclick = () => {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
};

init();

