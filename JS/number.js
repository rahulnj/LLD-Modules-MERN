function number(A, B, Fn) {
  const ans = Fn(A, B);
  return ans;
}

function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function diff(x, y) {
  return x - y;
}

console.log(number(1, 2, sum));
