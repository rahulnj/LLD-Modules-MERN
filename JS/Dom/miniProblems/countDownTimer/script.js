const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const pauseBtn = document.getElementById('pause');
const continueBtn = document.getElementById('continue');

const hoursInput = document.getElementById('hr');
const minutesInput = document.getElementById('min');
const secondsInput = document.getElementById('sec');

const SECONDS_IN_MIN = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MIN * 60;

startBtn.addEventListener('click', () => {
  const hoursValue = getValidInput(hoursInput.value);
  const minutesValue = getValidInput(minutesInput.value);
  const secondsValue = getValidInput(secondsInput.value);

  console.log(hoursValue);
});

function getValidInput(value) {
  return parseInt(!value ? 0 : value);
}
