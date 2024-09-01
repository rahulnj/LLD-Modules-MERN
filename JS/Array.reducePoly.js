function reduce(arr, reducer) {
  let ans = arr[0];

  for (let i = 1; i < arr.length; i++) {
    ans = reducer(ans, arr[i]);
  }
  return ans;
}

const sumReducer = (a, b) => a + b;
const arr = [1, 2, 3, 4, 5];
const result = reduce(arr, sumReducer);
console.log(result);
