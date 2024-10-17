function debounce(fn, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

let tPrice = 0;
const btns = document.querySelectorAll('button');
const pricetext = document.querySelector('p span');

function handleButtonClick(event) {
  const btn = event.target;
  const price = Number(btn.getAttribute('data-price'));
  tPrice += price;
  pricetext.innerText = tPrice;
}

btns.forEach((btn) => {
  btn.addEventListener('click', debounce(handleButtonClick, 500));
});
