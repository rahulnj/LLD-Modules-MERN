const inputField = document.getElementById('increment');
const actionBtns = document.querySelectorAll('.row button');
const resetBtn = document.getElementById('reset');
const counterDisplay = document.getElementById('number');

let inputValue = 1;
let currentDisplayedValue = parseInt(counterDisplay.innerText, 10);

inputField.addEventListener('input', (e) => {
  const value = parseInt(e.target.value, 10);
  inputValue = isNaN(value) ? 1 : value;
});

actionBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
      currentDisplayedValue = addCounterValue(currentDisplayedValue);
    } else if (e.target.classList.contains('subtract')) {
      currentDisplayedValue = subtractCounterValue(currentDisplayedValue);
    }
    updateCounterDisplay();
  });
});

resetBtn.addEventListener('click', resetHandler);

function updateCounterDisplay() {
  counterDisplay.innerText = currentDisplayedValue;
}

function resetHandler() {
  currentDisplayedValue = 0;
  updateCounterDisplay();
}

function addCounterValue(currentValue) {
  return currentValue + inputValue;
}

function subtractCounterValue(currentValue) {
  return currentValue - inputValue;
}
