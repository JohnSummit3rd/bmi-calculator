const calcPage = document.querySelector('.calc-bmi-page');
const resultsPage = document.querySelector('.results-bmi-page');
const calcBmiBtn = document.querySelector('.calc-bmi-btn');
const editInfoBtn = document.querySelector('.edit-info-btn');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('age');
const bmiText = document.querySelector(".bmi-text h3");
const bmiStatus = document.querySelector(".bmi-text p");
const semiCircle = document.getElementById('semicircle-img');

calcBmiBtn.addEventListener('click', () => {
  calcPage.classList.add('hidden');
  resultsPage.classList.remove('hidden');

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const age = Number(ageInput.value);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  bmiText.textContent = `${bmi}`;

  if (bmi < 18.5) {
    bmiStatus.textContent = "Underweight";
    semiCircle.src = "assets/semicircleblue.svg";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiStatus.textContent = "Normal";
    semiCircle.src = "assets/semicirclegreen.svg";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    bmiStatus.textContent = "Overweight";
    semiCircle.src = "assets/semicircleorange.svg";
  } else {
    bmiStatus.textContent = "Obese";
    semiCircle.src = "assets/semicirclered.svg";
  }
});

editInfoBtn.addEventListener('click', () => {
  resultsPage.classList.add('hidden');
  calcPage.classList.remove('hidden');
});
