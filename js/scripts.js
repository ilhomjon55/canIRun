// Get all necessary elements form html document

var elResultBox = document.querySelector('.result-box');
var elResultPositive = document.querySelector('.positive-answer');
var elResultNegatie = document.querySelector('.negative-answer');
var elFormMain = document.querySelector('.form-main');
var elTemperatureInput = document.querySelector('.temperature-input');
var elRainInput = document.querySelector('.rain-input');
var elFitnessInput = document.querySelector('.fitness-input');

var allowToRun = function (evt) {
  evt.preventDefault();

  var temperatureInput = parseFloat(elTemperatureInput.value.trim(), 10);
  var rainInput = elRainInput
  var fitnessInput = elFitnessInput;

  var minTemperature = 5;
  var maxTemperature = 30;

  var answer;
  var answerStatus;


  var isTemperatureOkay = maxTemperature >= temperatureInput && temperatureInput >= minTemperature
  console.log(isTemperatureOkay);
  if (isTemperatureOkay && !rainInput.checked) {
    answer = 'Yes!';
    answerStatus = 'success'
  } else if (isTemperatureOkay && fitnessInput.checked && rainInput.checked) {
    answer = 'Yes!';
    answerStatus = 'success'
  } else {
    answer = 'Stay home!';
    answerStatus = 'danger'
  }
  elResultBox.classList.remove('alert-danger', 'alert-success');
  elResultBox.classList.add(`alert-${answerStatus}`);
  elResultBox.textContent = answer;
}

elFormMain.addEventListener('submit', allowToRun);
elRainInput.addEventListener('change', allowToRun);
elRainInput.addEventListener('change', allowToRun);
elFitnessInput.addEventListener('change', allowToRun);