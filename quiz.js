let currentQuestionIndex = 0;
let score = 0;

const questions = document.querySelectorAll('.question');
const yesButtons = document.querySelectorAll('.yes-btn');
const noButtons = document.querySelectorAll('.no-btn');
const responseMessage = document.getElementById('response-message');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const customContent = document.getElementById('custom-content');

function displayQuestion(index) {
  if (index > 0) {
    questions[index - 1].style.display = 'none';
  }

  if (index < questions.length) {
    questions[index].style.display = 'block';
    nextBtn.style.display = 'none';
    responseMessage.textContent = '';
  } else {
    showResults(score);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

displayQuestion(currentQuestionIndex);
