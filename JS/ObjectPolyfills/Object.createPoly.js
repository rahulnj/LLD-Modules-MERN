const personPrototype = {
  greet: function () {
    console.log('Hello, my name is ' + this.name + '.');
  },
  name: 'rahul',
};

function myObjectCreate(proto) {
  if (proto === null || proto === undefined || typeof proto !== 'object') {
    throw new Error('Invalid prototype');
  }

  function F() {}
  F.prototype = proto;
  return new F();
}

const person = myObjectCreate(personPrototype);
console.log(Object.keys(person));

console.log(Object.getPrototypeOf(person) === personPrototype);
