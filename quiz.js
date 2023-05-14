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

function showResults(finalScore, customHTML) {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  finalScore.textContent = score;

  if (customHTML) {
    customContent.innerHTML = customHTML;
  } else {
    customContent.innerHTML = '';
    if (score >= 3) {
      resultMessage.innerHTML += `
          <p>Whoa there, speedy shopper! It looks like you're ready to throw down some serious cash. But let's slow down for just a second. Take a deep breath and ask yourself, 'Do I really need this?' We believe in you, so take a moment to reconsider before you make it rain.</p>
        `;
    } else {
      resultMessage.innerHTML += `
          <p>You're officially allowed to treat yourself guilt-free! Just remember to stay within your budget and think twice before making any big purchases. Happy shopping! 🛍️</p>
        `;
    }
  }
}

yesButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  });
});

noButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      const customHTML = `
        <p>If the item you want to buy is not within your budget, it's likely an impulsive buy. Pause and consider the following exercises:</p>
        <p>1. Use the 24-Hour Rule: Wait 24 hours before making the purchase. This helps you reassess and ensure it aligns with your financial goals.</p>
        <p>2. Reflect on Value: Think about the long-term value and impact of the purchase. Is it truly necessary and worth the cost?</p>
        <p>3. Evaluate Opportunity Costs: Consider what else you could do with the money. Are there more meaningful ways to utilize it?</p>
        <p>By following these exercises, you'll make more informed and responsible purchasing decisions. Prioritize your financial well-being and stay within your budgetary limits.</p>
      `;

      showResults(0, customHTML);
    } else {
      score++;
      nextBtn.style.display = 'inline-block';
      btn.style.display = 'none';
      yesButtons[index].style.display = 'none';
    }
  });
});

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

displayQuestion(currentQuestionIndex);
