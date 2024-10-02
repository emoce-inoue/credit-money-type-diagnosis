document.addEventListener('DOMContentLoaded', () => {
  const answers = document.querySelectorAll('.l-question__select');
  const resultButtonDisabled = document.querySelector('.c-full-button--result-disabled');
  const resultButtonOn = document.querySelector('.c-full-button--result-on');
  const loadingScreen = document.querySelector('.l-loading');
  let selectedAnswers = new Set();

  answers.forEach((select, index) => {
    const buttons = select.querySelectorAll('button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('c-button--selected')) {
          return;
        }

        const selectedButton = select.querySelector('.c-button--selected');
        if (selectedButton) {
          selectedButton.classList.remove('c-button--selected');
        }

        button.classList.add('c-button--selected');
        selectedAnswers.add(index);

        if (index < answers.length - 1) {
          const nextQuestion = answers[index + 1].closest('.l-question');
          if (nextQuestion) {
            nextQuestion.scrollIntoView({ behavior: 'smooth' });
          }
        }

        if (selectedAnswers.size === answers.length) {
          resultButtonDisabled.classList.add('c-full-button--hidden');
          resultButtonOn.classList.remove('c-full-button--hidden');
        }
      });
    });
  });

  resultButtonOn.addEventListener('click', () => {
    loadingScreen.classList.remove('l-loading--hidden');

    let totalPoints = 0;
    answers.forEach((select) => {
      const selectedButton = select.querySelector('.c-button--selected');
      if (selectedButton) {
        totalPoints += parseInt(selectedButton.getAttribute('data-point'), 10);
      }
    });

    const allResults = document.querySelectorAll('.l-result');
    allResults.forEach((result) => result.classList.add('l-result--hidden'));

    let resultTypeId = '';
    if (totalPoints >= 41) {
      resultTypeId = 'resultIruka';
    } else if (totalPoints >= 31) {
      resultTypeId = 'resultMaguro';
    } else if (totalPoints >= 26) {
      resultTypeId = 'resultKumanomi';
    } else if (totalPoints >= 16) {
      resultTypeId = 'resultKujira';
    } else if (totalPoints >= 6) {
      resultTypeId = 'resultUmigame';
    } else {
      resultTypeId = 'resultTatsunootoshigo';
    }

    const resultElement = document.getElementById(resultTypeId);
    resultElement.classList.remove('l-result--hidden');
    resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const snsList = document.querySelector('.l-sns');
    snsList.classList.remove('l-sns--hidden');
    const triangle = document.querySelector('.l-look');
    triangle.classList.remove('l-look--triangle-hidden');

    setTimeout(() => {
      loadingScreen.classList.add('l-loading--hidden');
    }, 1000);
  });
});
