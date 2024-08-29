function fn() {
  let fnCallCount = 1;
  function innerFn(arg) {
    if (arg === 0) {
      return fnCallCount;
    }
    fnCallCount++;
    return innerFn;
  }
  return innerFn;
}

const func = fn();
console.log(func(1)(1)(1)(0));

// Lexical env
var varName = 10;
function b() {
  console.log(varName);
}
function fn() {
  var varName = 20;
  b();
  console.log(varName);
}
fn();

// Output : 10, 20
