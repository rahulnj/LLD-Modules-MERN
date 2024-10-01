const REMOVAL_KEYS = ['delete', 'backspace'];
const inputs = document.getElementById('inputs');

inputs.addEventListener('input', handleInputFields);
inputs.addEventListener('keyup', handleBackSpace);

function handleInputFields(e) {
  const selectedInputField = e.target;
  const inputValue = e.target.value;

  if (isNaN(inputValue)) {
    selectedInputField.value = '';
    return;
  }
  if (inputValue !== '') {
    const nextInputField = selectedInputField.nextElementSibling;
    if (nextInputField) nextInputField.focus();
  }
}

function handleBackSpace(e) {
  const selectedInputField = e.target;
  const key = e.key.toLowerCase();

  if (REMOVAL_KEYS.includes(key)) {
    selectedInputField.value = '';
    const prevInputField = selectedInputField.previousElementSibling;
    if (prevInputField) prevInputField.focus();
  }
}
