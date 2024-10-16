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
let btns = document.querySelectorAll('button');
let pricetext = document.querySelector('p span');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener(
    'click',
    debounce(function (e) {
      let price = Number(btns[i].getAttribute('data-price'));
      tPrice += price;
      pricetext.innerText = tPrice;
    }, 500)
  );
}
