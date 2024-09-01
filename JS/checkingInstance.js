function checkIfInstanceOf(obj, classFn) {
  if (obj === null) return false; // Base case: reached end of prototype chain
  if (obj.constructor === classFn) return true; // Base case: found matching constructor
  return checkIfInstanceOf(Object.getPrototypeOf(obj), classFn); // Recurse up the chain
}

// Example usage:
class A {}
class B extends A {}
const b = new B();
console.log(checkIfInstanceOf(b, A)); // true
console.log(checkIfInstanceOf(b, B)); // true
console.log(checkIfInstanceOf(b, Object)); // true
console.log(checkIfInstanceOf(b, Array)); // false
