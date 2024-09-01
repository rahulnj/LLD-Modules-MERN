const obj = {
  name: 'John',
  age: 30,
};

function sealPolyfill() {
  if (this === null || typeof obj !== 'object') {
    throw new TypeError('Object.seal can only be called on Objects.');
  }

  // Get own property names of the object
  const propNames = Object.getOwnPropertyNames(obj);

  for (let i = 0; i < propNames.length; i++) {
    Object.defineProperty(obj, propNames[i], {
      configurable: false,
      writable: true,
      enumerable: true,
    });
  }

  Object.preventExtensions(obj);

  return obj;
}

Object.prototype.sealPolyfill = function () {
  return sealPolyfill(this);
};

console.log(Object.isSealed(obj)); // Output: false

obj.sealPolyfill();

console.log(Object.isSealed(obj)); // Output: true

obj.name = 'Jane'; // Existing property can still be modified
console.log(obj.name); // Output: Jane

obj.gender = 'Female'; // Attempt to add a new property
console.log(obj.gender); // Output: undefined (property was not added)

delete obj.age; // Attempt to delete an existing property
console.log(obj.age); // Output: 30 (property was not deleted)
