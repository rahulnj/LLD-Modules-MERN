const cap = {
  name: 'Steve',
  team: 'Cap',
  petersTeam: function (mem1, ...mem2) {
    console.log(`Hey ${this.name} I am your neighborhood's  
              spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
  },
};

const ironMan = {
  name: 'Tony',
  team: 'Iron Man',
};

/**
 * polyfill of Call method
 * **/

Function.prototype.customCall = function (obj, ...args) {
  // Capture the original function reference
  const fnRef = this;

  obj = obj || window;

  const uniqueProp = Symbol('callPolyfill');

  // Copy function to the method
  obj[uniqueProp] = fnRef;

  // Call the method
  const result = obj[uniqueProp](...args);

  // Delete the temp method
  delete obj[uniqueProp];

  return result;
};

cap.petersTeam.customCall(
  ironMan,
  'thor',
  'loki',
  'Natasha',
  'Sanket',
  'Aravinth',
  'Shubham'
);

/**
 * polyfill of Apply method
 * **/

Function.prototype.customApply = function (obj, argsInArrayForm) {
  // Capture the original function reference
  const fnRef = this;

  obj = obj || window;

  const uniqueProp = Symbol('applyPolyfill');

  // Copy function to the method.
  obj[uniqueProp] = fnRef;

  // Call the function.
  obj[uniqueProp](...argsInArrayForm);

  // delete temp method.
  delete obj[uniqueProp];
};

cap.petersTeam.customApply(ironMan, ['thor', 'loki', 'Natasha']);

/**
 * polyfill of Bind method
 **/

Function.prototype.customBind = function (obj) {
  // Capture the original function reference
  const fnRef = this;

  obj = obj || window;

  // Return a new function that can accept any number of arguments
  return function (...args) {
    return fnRef.call(obj, ...args);
  };
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };

const greetPerson = greet.customBind(person);

const result = greetPerson('Hello', '!');
console.log(result);
