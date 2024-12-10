Array.prototype.customReduce = function (reducer, initialValue) {
  let ans;
  let startIndex;
  const arr = this;

  // Check if an initial value is provided
  if (initialValue !== undefined) {
    ans = initialValue;
    startIndex = 0;
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    ans = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    ans = reducer(ans, arr[i]);
  }
  return ans;
};

const sumReducer = (a, b) => a + b;

const arr = [1, 2, 3, 4, 5];

const resultWithInitialValue = arr.customReduce(sumReducer, 10);
console.log(resultWithInitialValue); // Output: 25
