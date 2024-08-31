/* A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other words, 
a closure gives a function access to its outer scope. In JavaScript, closures 
are created every time a function is created, at function creation time.
 */

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
function fnb() {
  console.log(varName);
}
function fn2() {
  var varName = 20;
  fnb();
  console.log(varName);
}
fn2(); // Output : 10, 20

// Problem 3: Lexical env
let a;
console.log(a); // undefined
function A() {
  let a = 2;
  console.log(a); // 2
  function C() {
    console.log(a); // 2
    function D() {
      console.log(a); // 2
      a = 4;
    }
    D();
    a = 3;
  }
  C();
}
a = 3;
A(); // Output : undefined 2 2 2

// Problem 4 : Lexical scope
let b;
console.log(b); // undefined
function B() {
  let b;
  console.log(b); // undefined
  function E() {
    b = 6;
    console.log(b); // 6
  }
  b = 2;
  E();
  console.log(b); // 6
}

b = 3;

B(); // Output : undefined undefined 6 6

// Problem 4 : lexical scope
let c;
console.log(c); // undefined
function F() {
  console.log(c); // 2
  c = 3;
}
c = 2;
F(); // Output : undefined 2

// Problem 5
function createCounter(init, delta) {
  function count() {
    init = init + delta;
    return init;
  }
  return count;
}
let c1 = createCounter(10, 5);
let c2 = createCounter(5, 2);

console.log(c1()); // 15
console.log(c2()); // 7
console.log(c1()); // 20
console.log(c2()); // 9

// Problem 6
/***
 * Nested closure : you will get access to outer variable even if the
 * outer fn is not your direct parent
 * */
let iamINGEC = 200;
function getFirstName(firstName) {
  console.log('I have got your first Name');
  return function getLastName(lastName) {
    console.log('I have got Your last Name');
    return function getGreeter() {
      console.log(`Hi I am ${firstName} ${lastName}`); // closure
      console.log('Hi GEC', iamINGEC); // Lexical scope
      iamINGEC++;
    };
  };
}

const lnNameRtrn = getFirstName('Rajneesh');
const greeter = lnNameRtrn('Kumar');

greeter();
greeter();
greeter();
greeter();
greeter();
greeter();
console.log('final value: ', iamINGEC);
// Output :
// I have got your first Name
// I have got Your last Name
// Hi I am Rajneesh Kumar
// Hi GEC 200
// Hi I am Rajneesh Kumar
// Hi GEC 201
// Hi I am Rajneesh Kumar
// Hi GEC 202
// Hi I am Rajneesh Kumar
// Hi GEC 203
// Hi I am Rajneesh Kumar
// Hi GEC 204
// Hi I am Rajneesh Kumar
// Hi GEC 205
// final value:  206

/*--------------------------------- asynchrounous code  ---------------------------------**/

let j = 200;
console.log('Before');

function cb() {
  console.log('I will explode', j);
}
setTimeout(cb, 2000);

console.log('After');
for (let i = 0; i < 1000; i++) {
  j++;
}
/*
Output : 
Before
After
I will explode 1200 // will print after 2 seconds
*/

function fun() {
  let a = 200;
  console.log('Before');

  function cb() {
    console.log('I will explode', a);
  }

  console.log('After');
  return cb;
}

setTimeout(fun(), 2000);
/*
Output : 

Before
After
I will explode 200 // will print after 2 seconds
*/
