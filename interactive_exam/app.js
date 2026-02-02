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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Variables de estado
let activeExamId = null;
let questions = [];
let filteredQuestions = [];
let currentFilter = 'all';
let currentIndex = 0;
let userAnswers = [];
let sessionStartTime;
let totalElapsedTime = 0;
let timerInterval;
let resultsChartInstance = null;
let isPaused = false;

// Elementos UI
let startScreen, quizScreen, resultsScreen, pauseOverlay, resumeExamBtn, examsCatalog;
let nextBtn, prevBtn, skipBtn, finishBtn, restartBtn, pauseBtn;
let questionText, optionsList, feedbackContainer, feedbackMessage, chapterRef, sourceText, explanationText, questionImage;
let questionNumber, progressBarFill, timerDisplay, questionGrid, domainFilter;

function isDataLoaded() { return filteredQuestions && filteredQuestions.length > 0; }

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

async function init() {
    try {
        console.log("Iniciando aplicación v3.0.2...");

        // Asignar selectores
        startScreen = document.getElementById('start-screen');
        quizScreen = document.getElementById('quiz-screen');
        resultsScreen = document.getElementById('results-screen');
        pauseOverlay = document.getElementById('pause-overlay');
        resumeExamBtn = document.getElementById('resume-exam-btn');
        examsCatalog = document.getElementById('exams-catalog');
        nextBtn = document.getElementById('next-btn');
        prevBtn = document.getElementById('prev-btn');
        skipBtn = document.getElementById('skip-btn');
        finishBtn = document.getElementById('finish-btn');
        restartBtn = document.getElementById('restart-btn');
        pauseBtn = document.getElementById('pause-btn');
        questionText = document.getElementById('question-text');
        questionImage = document.getElementById('question-image');
        optionsList = document.getElementById('options-list');
        feedbackContainer = document.getElementById('feedback-container');
        feedbackMessage = document.getElementById('feedback-message');
        chapterRef = document.getElementById('chapter-ref');
        sourceText = document.getElementById('source-text');
        explanationText = document.getElementById('explanation-text');
        questionNumber = document.getElementById('question-number');
        progressBarFill = document.getElementById('progress-bar-fill');
        timerDisplay = document.getElementById('timer');
        questionGrid = document.getElementById('question-grid');
        domainFilter = document.getElementById('domain-filter');

        const dbExists = (typeof EXAMS_DATABASE !== 'undefined');
        if (dbExists) {
            renderExamsCatalog();
            checkPreviousSession();
        } else {
            console.error('No se encontró EXAMS_DATABASE.');
            const description = document.querySelector('.start-description');
            if (description) description.innerHTML = '<span style="color:var(--error);font-weight:bold;">Error: No se han podido cargar los datos de los exámenes. Por favor, recarga la página.</span>';
        }

        // Configurar Listeners
        if (domainFilter) domainFilter.addEventListener('change', (e) => applyDomainFilter(e.target.value));
        if (resumeExamBtn) resumeExamBtn.onclick = loadExamSession;
        if (pauseBtn) pauseBtn.onclick = togglePause;

        if (nextBtn) nextBtn.onclick = () => { currentIndex++; saveProgress(); renderQuestion(); };
        if (prevBtn) prevBtn.onclick = () => { if (currentIndex > 0) { currentIndex--; saveProgress(); renderQuestion(); } };
        if (skipBtn) skipBtn.onclick = skipQuestion;
        if (finishBtn) finishBtn.onclick = () => { if (confirm('¿Finalizar examen ahora?')) { saveProgress(); showResults(); } };

        if (restartBtn) {
            restartBtn.onclick = () => {
                localStorage.removeItem('network_plus_exam_state');
                resultsScreen.classList.remove('active');
                startScreen.classList.add('active');
                if (resumeExamBtn) resumeExamBtn.classList.add('hidden');
            };
        }

    } catch (error) {
        console.error('Error crítico en init:', error);
    }
}

function renderExamsCatalog() {
    if (!examsCatalog) return;
    examsCatalog.innerHTML = '';
    const exams = Object.values(EXAMS_DATABASE);
    if (exams.length === 0) {
        examsCatalog.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);">No hay exámenes disponibles en este momento.</p>';
        return;
    }
    exams.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        card.innerHTML = `
            <div class="exam-card-badge">${exam.version || 'v3.0'}</div>
            <div class="exam-card-icon">📚</div>
            <h3>${exam.title}</h3>
            <p>${exam.questions.length} preguntas disponibles</p>
            <button class="btn btn-primary" onclick="startQuiz('${exam.id}')">Seleccionar</button>
        `;
        examsCatalog.appendChild(card);
    });
}

function startQuiz(examId) {
    try {
        const examData = EXAMS_DATABASE[examId];
        if (!examData) throw new Error('Examen no encontrado');
        activeExamId = examId;
        questions = [...examData.questions];
        shuffleArray(questions);
        const initialDomain = domainFilter ? domainFilter.value : 'all';
        updateFilteredQuestions(initialDomain);
        if (!isDataLoaded()) throw new Error('Sin preguntas cargadas');
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
    } catch (e) {
        console.error("Error en startQuiz:", e);
    }
}

function loadExamSession() {
    const savedState = localStorage.getItem('network_plus_exam_state');
    if (!savedState) return;
    try {
        const state = JSON.parse(savedState);
        activeExamId = state.activeExamId || 'network_plus_exam_1';
        const examData = EXAMS_DATABASE[activeExamId];
        if (!examData) return;
        if (state.shuffledIds) {
            questions = state.shuffledIds.map(id => examData.questions.find(q => q.id === id)).filter(q => q);
        } else {
            questions = [...examData.questions];
        }
        userAnswers = state.userAnswers || [];
        totalElapsedTime = state.totalElapsedTime || 0;
        isPaused = state.isPaused || false;
        const savedFilter = state.currentFilter || 'all';
        if (domainFilter) domainFilter.value = savedFilter;
        updateFilteredQuestions(savedFilter);
        currentIndex = state.currentIndex || 0;
        startScreen.classList.remove('active');
        resultsScreen.classList.remove('active');
        quizScreen.classList.add('active');
        if (isPaused) {
            pauseOverlay.classList.remove('hidden');
            if (pauseBtn) pauseBtn.textContent = '▶️';
            renderTime(totalElapsedTime);
        } else {
            sessionStartTime = Date.now();
            startTimer();
        }
        renderQuestion();
        renderQuestionList();
    } catch (e) { console.error(e); }
}

function saveProgress() {
    const state = {
        activeExamId,
        currentIndex,
        currentFilter,
        shuffledIds: questions.map(q => q.id),
        userAnswers,
        totalElapsedTime: totalElapsedTime + (isPaused ? 0 : (sessionStartTime ? (Date.now() - sessionStartTime) : 0)),
        isPaused
    };
    localStorage.setItem('network_plus_exam_state', JSON.stringify(state));
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const dist = Date.now() - sessionStartTime;
        renderTime(totalElapsedTime + dist);
    }, 1000);
}

function renderTime(ms) {
    if (!timerDisplay) return;
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function pauseExam() {
    if (isPaused) return;
    isPaused = true;
    clearInterval(timerInterval);
    totalElapsedTime += (Date.now() - sessionStartTime);
    if (pauseOverlay) pauseOverlay.classList.remove('hidden');
    if (pauseBtn) pauseBtn.textContent = '▶️';
    saveProgress();
}

function resumeExam() {
    if (!isPaused) return;
    isPaused = false;
    sessionStartTime = Date.now();
    if (pauseOverlay) pauseOverlay.classList.add('hidden');
    if (pauseBtn) pauseBtn.textContent = '⏸️';
    startTimer();
    saveProgress();
}

function togglePause() { isPaused ? resumeExam() : pauseExam(); }

function renderQuestionList() {
    if (!questionGrid) return;
    questionGrid.innerHTML = '';
    filteredQuestions.forEach((q, index) => {
        const chip = document.createElement('div');
        chip.className = 'q-chip';
        const originalIndex = questions.indexOf(q);
        chip.textContent = originalIndex + 1;
        if (index === currentIndex) chip.classList.add('current');
        else if (userAnswers[originalIndex]) {
            if (userAnswers[originalIndex].isCorrect) chip.classList.add('correct');
            else if (!userAnswers[originalIndex].omitted) chip.classList.add('incorrect');
        }
        chip.onclick = () => jumpToQuestion(index);
        questionGrid.appendChild(chip);
    });
}

function jumpToQuestion(index) { currentIndex = index; renderQuestion(); }

function renderQuestion() {
    if (!isDataLoaded() || currentIndex >= filteredQuestions.length) {
        if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) showResults();
        return;
    }
    const q = filteredQuestions[currentIndex];
    questionText.textContent = q.question;

    // Render Image
    if (q.has_context_image && q.image_path) {
        questionImage.src = q.image_path;
        questionImage.classList.remove('hidden');
    } else {
        questionImage.classList.add('hidden');
        questionImage.src = '';
    }

    optionsList.innerHTML = '';
    renderQuestionList();
    if (feedbackContainer) feedbackContainer.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    if (skipBtn) skipBtn.classList.remove('hidden');
    if (prevBtn) prevBtn.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
    const originalIndex = questions.indexOf(q);
    const totalSel = filteredQuestions.length;
    questionNumber.textContent = `Pregunta ${currentIndex + 1}/${totalSel}${currentFilter !== 'all' ? ' [' + currentFilter + ']' : ''}`;
    progressBarFill.style.width = `${((currentIndex + 1) / totalSel) * 100}%`;
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.setAttribute('data-letter', String.fromCharCode(97 + idx));
        div.textContent = opt;
        const ans = userAnswers[originalIndex];
        if (ans && !ans.omitted) {
            if (opt === q.answer) div.classList.add('correct-reveal');
            else if (opt === ans.answer) div.classList.add('incorrect-reveal');
            div.style.cursor = 'default';
        } else {
            div.onclick = () => selectOption(div, opt);
        }
        optionsList.appendChild(div);
    });
    if (userAnswers[originalIndex]) {
        nextBtn.classList.remove('hidden');
        skipBtn.classList.add('hidden');
        if (!userAnswers[originalIndex].omitted) revealFeedback(userAnswers[originalIndex].isCorrect, q.explanation, q.source_reference);
    }
}

function selectOption(element, selectedText) {
    if (!feedbackContainer.classList.contains('hidden')) return;
    const q = filteredQuestions[currentIndex];
    const originalIndex = questions.indexOf(q);
    const isCorrect = selectedText === q.answer;
    userAnswers[originalIndex] = {
        questionId: q.id,
        answer: selectedText,
        isCorrect: isCorrect,
        domain: getDomainForChapter(q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0"),
        omitted: false
    };
    optionsList.querySelectorAll('.option-item').forEach(item => {
        item.style.cursor = 'default';
        if (item.textContent === q.answer) item.classList.add('correct-reveal');
        else if (item === element && !isCorrect) item.classList.add('incorrect-reveal');
    });
    revealFeedback(isCorrect, q.explanation, q.source_reference);
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
    saveProgress();
}

function revealFeedback(isCorrect, explanation, source) {
    if (!feedbackContainer) return;
    feedbackContainer.classList.remove('hidden');
    feedbackContainer.className = `feedback-container ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackMessage.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    chapterRef.textContent = source ? source.split('>')[0].split(':')[0].trim() : 'Ref';
    sourceText.textContent = source || 'Sin referencia';
    explanationText.textContent = explanation;
}

function skipQuestion() {
    const q = filteredQuestions[currentIndex];
    const originalIndex = questions.indexOf(q);
    userAnswers[originalIndex] = { questionId: q.id, omitted: true, isCorrect: false, domain: getDomainForChapter(q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0") };
    saveProgress();
    currentIndex++;
    renderQuestion();
}

function applyDomainFilter(domain) {
    if (quizScreen.classList.contains('active')) saveProgress();
    updateFilteredQuestions(domain);
    currentIndex = 0;
    if (quizScreen.classList.contains('active')) { renderQuestion(); renderQuestionList(); }
}

function checkPreviousSession() {
    if (localStorage.getItem('network_plus_exam_state') && resumeExamBtn) resumeExamBtn.classList.remove('hidden');
}

function showResults() {
    if (!isPaused && sessionStartTime) totalElapsedTime += (Date.now() - sessionStartTime);
    clearInterval(timerInterval);
    isPaused = false;
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    localStorage.removeItem('network_plus_exam_state');
    const activeSet = currentFilter !== 'all' ? filteredQuestions : questions;
    const total = activeSet.length;
    if (total === 0) return;
    activeSet.forEach(q => {
        const idx = questions.indexOf(q);
        if (!userAnswers[idx]) {
            userAnswers[idx] = { questionId: q.id, omitted: true, isCorrect: false, domain: getDomainForChapter(q.source_reference ? q.source_reference.split('>')[0].trim() : "Capítulo 0") };
        }
    });
    const activeUA = activeSet.map(q => userAnswers[questions.indexOf(q)]);
    const answered = activeUA.filter(a => a && !a.omitted);
    const correct = answered.filter(a => a.isCorrect).length;
    const percentage = Math.round((correct / total) * 100);
    document.getElementById('final-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = `(${correct}/${total})`;
    document.getElementById('correct-val').textContent = correct;
    document.getElementById('omitted-val').textContent = total - answered.length;
    document.getElementById('time-taken').textContent = `${Math.floor(totalElapsedTime / 60000)} min`;
    renderChart(correct, answered.length - correct, total - answered.length);
    renderDomainProgress();
}

function renderChart(correct, incorrect, omitted) {
    const ctx = document.getElementById('resultsChart')?.getContext('2d');
    if (!ctx) return;
    if (resultsChartInstance) resultsChartInstance.destroy();
    resultsChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: { labels: ['Correcto', 'Incorrecto', 'Omitido'], datasets: [{ data: [correct, incorrect, omitted], backgroundColor: ['#22c55e', '#ef4444', '#cbd5e1'], borderWidth: 0 }] },
        options: { cutout: '80%', plugins: { legend: { display: false } }, animation: { animateScale: true } }
    });
}

function renderDomainProgress() {
    const list = document.getElementById('domains-list');
    if (!list) return;
    list.innerHTML = '';
    const stats = {};
    Object.keys(DOMAIN_MAPPING).forEach(d => stats[d] = { total: 0, correct: 0, incorrect: 0, omitted: 0 });
    userAnswers.forEach(ans => {
        if (ans && stats[ans.domain]) {
            stats[ans.domain].total++;
            if (ans.omitted) stats[ans.domain].omitted++;
            else if (ans.isCorrect) stats[ans.domain].correct++;
            else stats[ans.domain].incorrect++;
        }
    });
    Object.entries(stats).forEach(([name, data], idx) => {
        if (data.total === 0) return;
        const cP = Math.round((data.correct / data.total) * 100), iP = Math.round((data.incorrect / data.total) * 100), oP = 100 - cP - iP;
        const item = document.createElement('div');
        item.className = `domain-item domain-${idx + 1}`;
        item.innerHTML = `
            <div class="domain-info"><span>${name}</span><span>${DOMAIN_MAPPING[name].description}</span></div>
            <div class="domain-progress-bar">
                <div class="bar-segment correct" style="width: ${cP}%">${cP > 5 ? cP + '%' : ''}</div>
                <div class="bar-segment incorrect" style="width: ${iP}%">${iP > 5 ? iP + '%' : ''}</div>
                <div class="bar-segment omitted" style="width: ${oP}%">${oP > 5 ? oP + '%' : ''}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

window.onload = init;
