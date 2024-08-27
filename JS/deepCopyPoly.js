let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
  friends: ['Steve', 'Nikola', 'Ray', { name: 'Jai', lastName: 'Roy' }],
  sayHi: function () {
    console.log('Hi Class!');
  },
};

function deepCopy(obj, seen = new Map()) {
  // Check if the value is primitive
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle functions by returning that function itself
  if (typeof obj === 'function') {
    return obj;
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Creating an array or object to hold the copied values
  const copy = Array.isArray(obj) ? [] : {};

  // Store the reference of the original object to the copied object
  seen.set(obj, copy);

  // Recursively copy each property
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key], seen);
    }
  }

  // Handle symbols, if any
  const symbolKeys = Object.getOwnPropertySymbols(obj);

  for (const symbol of symbolKeys) {
    copy[symbol] = deepCopy(obj[symbol], seen);
  }

  return copy;
}

const copy = deepCopy(person);
