const SECONDS_IN_MIN = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MIN * 60;

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const pauseBtn = document.getElementById('pause');
const continueBtn = document.getElementById('continue');

const hoursInput = document.getElementById('hr');
const minutesInput = document.getElementById('min');
const secondsInput = document.getElementById('sec');

let counterId = null;
let saveTimeLeft = 0;

const inputs = document.querySelectorAll('.timer_inputs input');
inputs.forEach((input) => {
  input.addEventListener('keyup', ({ target: { value } }) => {
    if (value !== '' && value !== '00') {
      startBtn.disabled = false;
      resetBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      resetBtn.disabled = true;
    }
  });
});

startBtn.addEventListener('click', () => {
  const hoursValue = getValidInput(hoursInput.value);
  const minutesValue = getValidInput(minutesInput.value);
  const secondsValue = getValidInput(secondsInput.value);

  if (!validateInputTime(hoursValue, minutesValue, secondsValue)) {
    return;
  }

  const countDownTime =
    hoursValue * SECONDS_IN_HOUR + minutesValue * SECONDS_IN_MIN + secondsValue;

  handleTimerRunning(countDownTime);

  startBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  resetBtn.style.display = 'block';
});

pauseBtn.addEventListener('click', (e) => {
  clearInterval(counterId);

  pauseBtn.style.display = 'none';
  continueBtn.style.display = 'block';
});

continueBtn.addEventListener('click', (e) => {
  handleTimerRunning(saveTimeLeft - 1);

  continueBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  resetBtn.style.display = 'block';
});

resetBtn.addEventListener('click', handleReset);

function handleReset() {
  hoursInput.value = '00';
  minutesInput.value = '00';
  secondsInput.value = '00';

  saveTimeLeft = 0;
  clearInterval(counterId);

  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
  continueBtn.style.display = 'none';
  resetBtn.style.display = 'none';
  startBtn.disabled = true;
}

function handleTimerRunning(countDownTime) {
  let timeLeft = countDownTime;
  counterId = setInterval(() => {
    saveTimeLeft = timeLeft--;
    handleDisplayTime(timeLeft);
    if (timeLeft < 0) {
      clearInterval(counterId);
      handleReset();
      return;
    }
  }, 1000);
}

function handleDisplayTime(time) {
  const hours = Math.floor(time / SECONDS_IN_HOUR);
  const minutes = Math.floor((time % SECONDS_IN_HOUR) / SECONDS_IN_MIN);
  const seconds = Math.floor(time % SECONDS_IN_MIN);

  console.log(hours + ':' + minutes + ':' + seconds);
  updateUi(hours, minutes, seconds);
}

function updateUi(hour, minute, second) {
  hoursInput.value = hour < 10 ? `0${hour}` : hour;
  minutesInput.value = minute < 10 ? `0${minute}` : minute;
  secondsInput.value = second < 10 ? `0${second}` : second;
}

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
