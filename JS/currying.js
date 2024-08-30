// Problem 1:
function fn1() {
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

const func1 = fn1();
// console.log(func1(1)(1)(1)(0));

// Problem 2: Lexical env
var varName = 10;
function b() {
  console.log(varName);
}
function fn2() {
  var varName = 20;
  b();
  console.log(varName);
}
fn2(); // Output : 10, 20

// Problem 3:
function fn3() {
  function multiply(a, b) {
    return a * b;
  }

  return function (a, b) {
    if (b) {
      return multiply(a, b);
    } else {
      return function (b) {
        return multiply(a, b);
      };
    }
  };
}

const func3 = fn3();
// console.log(func3(1)(3));
// console.log(func3(1, 3));

// Problem 3: same as problem 2 but direct call without assigning to a variable
function fn4(a, b) {
  function multiply(a, b) {
    return a * b;
  }
  if (b) {
    return multiply(a, b);
  } else {
    return function (b) {
      return multiply(a, b);
    };
  }
}

// console.log(fn4(1)(3));
// console.log(fn4(1, 3));
