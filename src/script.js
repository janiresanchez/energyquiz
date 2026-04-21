/*
  ==================================================
  ZONA EDITABLE: AQUÍ PUEDES CAMBIAR TUS PREGUNTAS
  ==================================================
  - En cada pregunta, la opción correcta está marcada con isCorrect: true
  - El juego mezcla las respuestas automáticamente en cada pregunta
*/
const quizQuestions = [
  {
    question: "¿Qué es la energía primaria?",
    options: [
      { text: "La energía primaria incluye las fuentes de energía obtenidas de los recursos naturales antes de su transformación.", isCorrect: true },
      { text: "La energía primaria está compuesta por el consumo energético en el formato que se usa finalmente.", isCorrect: false },
      { text: "La energía primaria es la electricidad, ya que es un bien de primera necesidad.", isCorrect: false },
      { text: "La energía primaria no existe.", isCorrect: false }
    ],
    explanation: "La energía primaria incluye las fuentes de energía bruta obtenida de los recursos naturales antes de su transformación o uso directo. Por ejemplo, el petróleo, el gas, el carbón, el uranio, el sol, el viento o el agua."
  },
  {
    question: "¿Qué es la energía secundaria?",
    options: [
      { text: "La energía secundaria está compuesta por el consumo energético en el formato que se usa finalmente.", isCorrect: true },
      { text: "La energía secundaria incluye las fuentes de energía obtenidas de los recursos naturales antes de su transformación.", isCorrect: false },
      { text: "La energía secundaria es la biomasa obtenida de los árboles.", isCorrect: false },
      { text: "La energía secundaria es la que viene de importaciones.", isCorrect: false }
    ],
    explanation: "La energía secundaria está compuesta por el consumo energético en el formato que se usa finalmente. Es decir, la electricidad y los combustibles utilizados para transporte, climatización y consumo energético en hogares e industrias."
  },
  {
    question: "¿Qué son las energías renovables?",
    options: [
      { text: "Las renovables son fuentes inagotables y producen energía libre de emisiones de gases de efecto invernadero. Además, en el caso de España, son autóctonas (es decir, no hace falta importarlas).", isCorrect: true },
      { text: "Las renovables son energías utópicas que aún no se han desarrollado.", isCorrect: false },
      { text: "Las renovables son limpias, pero en España no somos capaces de producirlas, dependemos de importaciones.", isCorrect: false },
      { text: "Las renovables se agotan rápidamente y además suelen tener emisiones de gases de efecto invernadero asociadas.", isCorrect: false }
    ],
    explanation: "Las tecnologías renovables obtienen energía mediante fuentes que se regeneran de forma natural, como el sol, el viento o el agua. Además, producen energía sin emisiones directas de gases de efecto invernadero, ya que no implican la combustión."
  },
  {
    question: "¿Qué son las energías mecánicas?",
    options: [
      { text: "Son las que aprovechan el movimiento de la naturaleza para generar electricidad. Por ejemplo, la eólica, la hidráulica, o la maremotriz.", isCorrect: true },
      { text: "Son las energías que producen calor directamente, como el gas y el carbón.", isCorrect: false },
      { text: "Son energías que solo se pueden usar en máquinas industriales.", isCorrect: false },
      { text: "Son las que funcionan con la electricidad almacenada en baterías de ion-litio.", isCorrect: false }
    ],
    explanation: "Las energías mecánicas aprovechan el movimiento de la naturaleza para generar electricidad. Por ejemplo, la eólica aprovecha el movimiento del viento para mover los aerogeneradores, la maremotriz aprovecha el movimiento de las olas o la hidráulica la diferencia de altura de dos masas de agua."
  },
  {
    question: "¿Cuál son energías térmicas?",
    options: [
      { text: "Son las que utilizan calor para generar energía, como la solar térmica, la geotermia o las centrales nucleares.", isCorrect: true },
      { text: "Son las que aprovechan el viento para producir electricidad.", isCorrect: false },
      { text: "Son energías que solo se utilizan en invierno.", isCorrect: false },
      { text: "Son las que funcionan gracias al movimiento del agua, como la undimotriz.", isCorrect: false }
    ],
    explanation: "Las energías térmicas utilizan calor para generar energía. En el caso de la solar térmica se aprovecha el calor del sol, en la geotermia el calor del interior de la tierra y, en otras centrales como las nucleares o las de combustión, el calor se utiliza para producir vapor de agua que mueve turbinas y genera electricidad."
  },
  {
    question: "¿Qué son los combustibles fósiles?",
    options: [
      { text: "Son recursos energéticos no renovables formados a partir de seres vivos durante millones de años, como el petróleo, el gas y el carbón. Al quemarse, generan gases de efecto invernadero, contribuyendo con el cambio climático.", isCorrect: true },
      { text: "Son energías renovables que se regeneran rápidamente en la naturaleza.", isCorrect: false },
      { text: "Son combustibles creados en laboratorios a partir de materiales artificiales.", isCorrect: false },
      { text: "Son recursos energéticos no renovables formados a partir de seres vivos durante millones de años, como el petróleo, el gas y el carbón. Al formarse de forma natural, no generan emisiones contaminantes.", isCorrect: false }
    ],
    explanation: "Los combustibles fósiles son el petróleo, el gas o el carbón, que se generan a partir de la descomposición de animales y plantas durante millones de años. La alta necesidad de tiempo para su generación, hacen que se consuman más rápido de los que se producen. Además, son los principales responsables del cambio climático, ya que su uso genera emisiones de gases de efecto invernadero."
  },
  {
    question: "El uranio se utiliza como fuente energética para…",
    options: [
      { text: "Producir electricidad en centrales de fisión nuclear.", isCorrect: true },
      { text: "Generar electricidad directamente a partir del sol.", isCorrect: false },
      { text: "Crear combustibles renovables.", isCorrect: false },
      { text: "Producir electricidad mediante fusión nuclear.", isCorrect: false }
    ],
    explanation: "Las centrales de fisión nuclear utilizan el uranio como combustible. Mediante el proceso de fisión nuclear, los átomos de uranio se dividen liberan una gran cantidad de calor. Ese calor es utilizado para producir vapor, que mueve una turbina conectada a un generador, produciendo electricidad."
  },
  {
    question: "¿Cuál de estas afirmaciones tiene que ver con las energías de combustión?",
    options: [
      { text: "Generan energía quemando materiales que producen emisiones contaminantes y gases de efecto invernadero.", isCorrect: true },
      { text: "Generan energía por ebullición, sin ningún tipo de efecto en el cambio climático.", isCorrect: false },
      { text: "Funcionan únicamente con la energía del sol.", isCorrect: false },
      { text: "Es la que se utiliza en dispositivos pequeños como móviles.", isCorrect: false }
    ],
    explanation: "La reacción de combustión se utiliza para producir energía al quemar materiales. Normalmente combustibles fósiles en centrales de ciclo combinado, motores de combustión interna, calderas, estufas etc."
  },
  {
    question: "La energía solar fotovoltaica…",
    options: [
      { text: "Transforma la luz solar directamente en electricidad mediante paneles solares.", isCorrect: true },
      { text: "Utiliza el calor del sol para hervir agua y mover turbinas.", isCorrect: false },
      { text: "Solo funciona durante la noche.", isCorrect: false },
      { text: "Es limpia, ya que no genera emisiones de efecto invernadero, pero necesita combustibles fósiles.", isCorrect: false }
    ],
    explanation: "La energía solar fotovoltaica nos permite generar electricidad mediante paneles solares. La radiación solar incide en los paneles solares produciendo una corriente eléctrica gracias al efecto fotovoltaico, lo que nos permite generar electricidad renovable, limpia y barata."
  },
  {
    question: "La electricidad se puede obtener de…",
    options: [
      { text: "Diferentes fuentes de energía como el sol, el viento, el agua o los combustibles fósiles.", isCorrect: true },
      { text: "Únicamente de pilas y baterías.", isCorrect: false },
      { text: "Solo de energías renovables.", isCorrect: false },
      { text: "Solo del petróleo y gas natural.", isCorrect: false }
    ],
    explanation: "La electricidad es una forma de energía ampliamente utilizada en nuestra forma de vida moderna. Se puede producir de muchas formas, por ejemplo, mediante energías renovables, en las centrales nucleares, en centrales de ciclo combinado etc."
  }
];

// Referencias a elementos del DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const questionTextEl = document.getElementById("question-text");
const answersContainerEl = document.getElementById("answers-container");
const feedbackEl = document.getElementById("feedback");
const explanationBoxEl = document.getElementById("explanation-box");
const explanationEl = document.getElementById("explanation");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");

const progressFillEl = document.querySelector(".progress-fill");

// Estado del juego
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;
let displayedOptions = [];

totalQuestionsEl.textContent = quizQuestions.length;

function showScreen(screenToShow) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screenToShow.classList.add("active");
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  scoreEl.textContent = score;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  explanationEl.textContent = "";
  explanationBoxEl.classList.remove("visible");
  nextBtn.disabled = true;
}

function shuffleOptions(options) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}

function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  hasAnswered = false;
  nextBtn.disabled = true;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  explanationEl.textContent = "";
  explanationBoxEl.classList.remove("visible");

  currentQuestionEl.textContent = currentQuestionIndex + 1;
  progressFillEl.style.width = `${((currentQuestionIndex) / quizQuestions.length) * 100}%`;
  questionTextEl.textContent = currentQuestion.question;
  answersContainerEl.innerHTML = "";
  displayedOptions = shuffleOptions(currentQuestion.options);

  // Cambiar el texto del botón si es la última pregunta
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Finalizar quiz";
  } else {
    nextBtn.textContent = "Siguiente pregunta";
  }

  displayedOptions.forEach((option, optionIndex) => {
    const answerButton = document.createElement("button");
    answerButton.className = "answer-btn";
    answerButton.type = "button";
    answerButton.textContent = option.text;
    answerButton.addEventListener("click", () => handleAnswer(optionIndex));
    answersContainerEl.appendChild(answerButton);
  });
}

function handleAnswer(selectedOptionIndex) {
  if (hasAnswered) return;
  hasAnswered = true;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answerButtons = answersContainerEl.querySelectorAll(".answer-btn");
  const isCorrect = displayedOptions[selectedOptionIndex].isCorrect;
  const correctOptionIndex = displayedOptions.findIndex((option) => option.isCorrect);

  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctOptionIndex) {
      button.classList.add("correct");
    } else if (index === selectedOptionIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score += 1;
    scoreEl.textContent = score;
    feedbackEl.textContent = "¡Muy bien! Respuesta correcta.";
    feedbackEl.classList.add("correct");
  } else {
    feedbackEl.textContent = "Ups... no es correcta. ¡La siguiente te saldrá genial!";
    feedbackEl.classList.add("incorrect");
  }

  explanationEl.textContent = currentQuestion.explanation;
  explanationBoxEl.classList.add("visible");
  
  // Cambiar el texto del botón si es la última pregunta
  console.log("Pregunta actual:", currentQuestionIndex, "Total preguntas:", quizQuestions.length);
  console.log("Texto de la pregunta:", currentQuestion.question);
  
  // Verificar si es la última pregunta por índice o por texto específico
  if (currentQuestionIndex === quizQuestions.length - 1 || 
      currentQuestion.question.includes("La electricidad se puede obtener de")) {
    console.log("Es la última pregunta, cambiando texto a 'Finalizar quiz'");
    nextBtn.textContent = "Finalizar quiz";
  } else {
    console.log("No es la última pregunta, manteniendo 'Siguiente pregunta'");
    nextBtn.textContent = "Siguiente pregunta";
  }
  
  nextBtn.disabled = false;
}

function showFinalResult() {
  resultMessageEl.classList.remove("score-good", "score-bad");
  finalScoreEl.classList.remove("score-good", "score-bad");

  if (score >= 7) {
    resultMessageEl.textContent = "¡Excelente trabajo! Has dominado el quiz.";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 👍`;
    resultMessageEl.classList.add("score-good");
    finalScoreEl.classList.add("score-good");
    createConfetti();
  } else if (score >= 5) {
    resultMessageEl.textContent = "¡Enhorabuena! Has aprobado pero puedes mejorar mucho.";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 📚✏️`;
    resultMessageEl.classList.add("score-good");
    finalScoreEl.classList.add("score-good");
    createConfetti();
  } else {
    resultMessageEl.textContent = "Necesitas seguir practicando. ¡Tú puedes!";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 👎`;
    resultMessageEl.classList.add("score-bad");
    finalScoreEl.classList.add("score-bad");
  }

  showScreen(resultScreen);
}

function createConfetti() {
  const confettiCount = 150;
  const colors = ['#a1ab69', '#f5a623', '#2ecc71', '#ff6b6b', '#4ecdc4', '#9b59b6'];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 2;
    const drift = Math.random() * 40 - 20;
    confetti.style.setProperty('--drift', `${drift}px`);
    confetti.style.animation = `fall ${duration}s ease forwards ${delay}s`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);

    // Remove confetti after animation ends
    const lifeTime = (delay + duration + 0.5) * 1000;
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, lifeTime);
  }
}

function goToNextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showFinalResult();
  }
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");
  setTimeout(() => {
    resetGame();
    showScreen(quizScreen);
    renderQuestion();
  }, 300);
});

nextBtn.addEventListener("click", goToNextQuestion);

restartBtn.addEventListener("click", () => {
  resetGame();
  showScreen(startScreen);
});

