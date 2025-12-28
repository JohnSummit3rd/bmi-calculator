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
const maleBox = document.querySelector('.male');
const femaleBox = document.querySelector('.female');
const arrowContainers = document.querySelectorAll('.arrow-btns');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');
const ageGroup = document.getElementById('age-group');
const maleDiv = document.getElementById('male');
const femaleDiv = document.getElementById('female');

let selectedGender = null;

maleBox.addEventListener('click', () => {
  maleBox.classList.add('active-border');
  maleBox.classList.add('selected');
  femaleBox.classList.remove('active-border');
  femaleBox.classList.remove('selected');

  selectedGender = "male";
});

femaleBox.addEventListener('click', () => {
  femaleBox.classList.add('active-border');
  femaleBox.classList.add('selected');
  maleBox.classList.remove('active-border');
  maleBox.classList.remove('selected');
  selectedGender = "female";
});

calcBmiBtn.addEventListener('click', () => {
  if (!selectedGender) {
    alert("Please select a gender");
    return;
  } else {

  }

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const age = Number(ageInput.value);
  const gender = selectedGender;

  if (!height || !weight || !age) {
    alert("Please fill in all fields");
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  bmiText.textContent = `${bmi}`;

  if (age >= 18) {
    if (bmi < 18.5) {
      bmiStatus.textContent = "Underweight";
      semiCircle.src = "assets/semicircleblue.svg";
      bmiValue.textContent = bmi;
      bmiCategory.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus.textContent = "Normal";
      semiCircle.src = "assets/semicirclegreen.svg";
      bmiValue.textContent = bmi;
      bmiCategory.textContent = "Normal";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      bmiStatus.textContent = "Overweight";
      semiCircle.src = "assets/semicircleorange.svg";
      bmiValue.textContent = bmi;
      bmiCategory.textContent = "Overweight";
    } else {
      bmiStatus.textContent = "Obese";
      semiCircle.src = "assets/semicirclered.svg";
      bmiValue.textContent = bmi;
      bmiCategory.textContent = "Obese";
    }
  } else {
    if (gender == "male") {
      if (bmi < 14.0) {
        bmiStatus.textContent = "Underweight";
        semiCircle.src = "assets/semicircleblue.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Underweight";
        ageGroup.textContent = "children";
      } else if (bmi >= 14.0 && bmi < 21.0) {
        bmiStatus.textContent = "Normal";
        semiCircle.src = "assets/semicirclegreen.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Normal";
        ageGroup.textContent = "children";
      } else if (bmi >= 21.0 && bmi < 24.9) {
        bmiStatus.textContent = "Overweight";
        semiCircle.src = "assets/semicircleorange.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Overweight";
        ageGroup.textContent = "children";
      } else {
        bmiStatus.textContent = "Obese";
        semiCircle.src = "assets/semicirclered.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Obese";
        ageGroup.textContent = "children";
      }
    } else {
      if (bmi < 14.0) {
        bmiStatus.textContent = "Underweight";
        semiCircle.src = "assets/semicircleblue.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Underweight";
        ageGroup.textContent = "children";
      } else if (bmi >= 14.0 && bmi < 22.0) {
        bmiStatus.textContent = "Normal";
        semiCircle.src = "assets/semicirclegreen.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Normal";
        ageGroup.textContent = "children";
      } else if (bmi >= 22.0 && bmi < 25.0) {
        bmiStatus.textContent = "Overweight";
        semiCircle.src = "assets/semicircleorange.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Overweight";
        ageGroup.textContent = "children";
      } else {
        bmiStatus.textContent = "Obese";
        semiCircle.src = "assets/semicirclered.svg";
        bmiValue.textContent = bmi;
        bmiCategory.textContent = "Obese";
        ageGroup.textContent = "children";
      }
    }
  }

  calcPage.classList.add('hidden');
  resultsPage.classList.remove('hidden');
});

editInfoBtn.addEventListener('click', () => {
  resultsPage.classList.add('hidden');
  calcPage.classList.remove('hidden');
});

arrowContainers.forEach(container => {
  const input = container.previousElementSibling;
  const upBtn = container.querySelector('.up-arrow');
  const downBtn = container.querySelector('.down-arrow');

  upBtn.addEventListener('click', () => {
    input.value = parseInt(input.value || 0) + 1;
  });

  downBtn.addEventListener('click', () => {
    input.value = parseInt(input.value || 0) - 1;
    if (input.value <= 0) {
      input.value = 0;
    }
  });
});