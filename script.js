const calcPage = document.querySelector('.calc-bmi-page');
const resultsPage = document.querySelector('.results-bmi-page');
const calcBmiBtn = document.querySelector('.calc-bmi-btn');
const editInfoBtn = document.querySelector('.edit-info-btn');

calcBmiBtn.addEventListener('click', () => {
  calcPage.classList.add('hidden');
  resultsPage.classList.remove('hidden');
});

editInfoBtn.addEventListener('click', () => {
  resultsPage.classList.add('hidden');
  calcPage.classList.remove('hidden');
});
