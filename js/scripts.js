// Get all necessary elements form html document

var elResultBox = document.querySelector('.result-box');
var elResultPositive = document.querySelector('.positive-answer');
var elResultNegatie = document.querySelector('.negative-answer');
var elFormMain = document.querySelector('.form-main');
var elTemperatureInput = document.querySelector('.temperature-input');
var elRainInput = document.querySelector('.rain-input');
var elFitnessInput = document.querySelector('.fitness-input');

// Add main function allowToRUN
var allowToRun = function (evt) {
  evt.preventDefault();

  // Assign input to new bindings
  var temperatureInput = parseFloat(elTemperatureInput.value.trim(), 10);
  var rainInput = elRainInput
  var fitnessInput = elFitnessInput;

  // Check validation of input
  elTemperatureInput.classList.remove('is-invalid');

  if (isNaN(temperatureInput)) {
    elTemperatureInput.classList.add('is-invalid');
    return;
  }
  if (!temperatureInput) {
    elTemperatureInput.classList.add('is-invalid');
    return;
  }


  // Set min max temps
  var minTemperature = 5;
  var maxTemperature = 30;

  var answer;
  var answerStatus;

  var isTemperatureOkay = maxTemperature >= temperatureInput && temperatureInput >= minTemperature

  // Check if the input is valid
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

  // Give output
  elResultBox.classList.remove('alert-danger', 'alert-success');
  elResultBox.classList.add(`alert-${answerStatus}`);
  elResultBox.textContent = answer;
};

// Add function to EventListeners
elFormMain.addEventListener('submit', allowToRun);
elRainInput.addEventListener('change', allowToRun);
elRainInput.addEventListener('change', allowToRun);
elFitnessInput.addEventListener('change', allowToRun);