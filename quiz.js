'use strict';

const questions = [
  {
    question: 'Is the item you want to buy within your budget?',
    no: {
      message:
        'This might be an impulsive buy. Consider waiting and evaluating your budget before making the purchase.',
    },
  },
  {
    question: 'Will this item enhance the quality of your life in any way?',

    no: {
      message:
        'This might be an impulsive buy. Think twice before making the purchase.',
    },
  },
  {
    question: 'Will you actually use this item?',

    no: {
      message:
        'Think about how often you will use this item? Does the amount of use justify the purchase price?. This might be an impulsive buy. Consider waiting before making the purchase.',
    },
  },
  {
    question: 'How long will this item last?',

    no: {
      message:
        'This might be an impulsive buy. Consider waiting and researching more durable alternatives.',
    },
  },
  {
    question:
      'Is this item something you cannot borrow from a friend when you need it?',

    no: {
      message: 'Consider borrowing the item instead of purchasing it.',
    },
  },
  {
    question:
      'Have you considered alternative uses for the money you would spend on this item?',

    no: {
      message:
        'This might be an impulsive buy. Consider waiting and evaluating alternative uses for the money before making the purchase.',
    },
  },
  {
    question: 'Have you been considering this purchase for more than a week?',

    no: {
      message:
        'This might be an impulsive buy. Consider waiting before making the purchase.',
    },
  },
];

document.getElementById('yes-btn').addEventListener('click', () => {
  nextQuestion();
});

document.getElementById('no-btn').addEventListener('click', () => {});

document.getElementById('next-btn').addEventListener('click', nextQuestion);

updateQuestion();
