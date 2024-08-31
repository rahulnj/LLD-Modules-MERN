// Problem 1:
function outer1() {
  let arrFn = [];
  let i;
  for (i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn1 = outer1();
arrFn1[0](); // Output : 3
arrFn1[1](); // Output : 3
arrFn1[2](); // Output : 3

// Reason : In your code, the output will be 3 for all three function calls.
// This happens because the variable i is shared among all the functions in the
// array and its value is 3 after the loop finishes.

// To fix this, you can create a closure that captures the value of i at each iteration.
// You can do this by using an IIFE (Immediately Invoked Function Expression) to create a
// new scope for each value of i.

function outer2() {
  let arrFn = [];
  for (let i = 0; i < 3; i++) {
    arrFn.push(
      (function (i) {
        return function fn() {
          console.log(i);
        };
      })(i)
    );
  }
  return arrFn;
}

let arrFn2 = outer2();
arrFn2[0](); // Output: 0
arrFn2[1](); // Output: 1
arrFn2[2](); // Output: 2

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
