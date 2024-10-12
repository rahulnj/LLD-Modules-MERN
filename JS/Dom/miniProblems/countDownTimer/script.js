const SECONDS_IN_MIN = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MIN * 60;

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const pauseBtn = document.getElementById('pause');
const continueBtn = document.getElementById('continue');

const hoursInput = document.getElementById('hr');
const minutesInput = document.getElementById('min');
const secondsInput = document.getElementById('sec');

startBtn.addEventListener('click', () => {
  const hoursValue = getValidInput(hoursInput.value);
  const minutesValue = getValidInput(minutesInput.value);
  const secondsValue = getValidInput(secondsInput.value);

  if (!validateInputTime(hoursValue, minutesValue, secondsValue)) {
    return;
  }

  const countDownTime =
    hoursValue * SECONDS_IN_HOUR + minutesValue * SECONDS_IN_MIN + secondsValue;
});

function validateInputTime(hours, minutes, seconds) {
  if (hours < 0 || minutes < 0 || seconds < 0) {
    alert("Negative value's are not allowed.");
    return false;
  } else if (hours > 24) {
    alert('Hour is greater than 24 which is not a valid hour.');
    return false;
  } else if (minutes > 60) {
    alert('Minute is greater than 60 which is not a valid minute.');
    return false;
  } else if (seconds > 60) {
    alert('Second is greater than 60 which is not a valid second.');
    return false;
  }

  return true;
}

function getValidInput(value) {
  return parseInt(!value ? 0 : value);
}
