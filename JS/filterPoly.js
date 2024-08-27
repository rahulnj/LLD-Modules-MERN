function filter(arr = [], callback) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    const resultBool = callback(arr[i]);

    if (resultBool) filteredArray.push(arr[i]);
  }
  return filteredArray;
}

const arr = [1, 2, 3, 4, 5];
const callback = (num) => num % 2 === 0;
console.log(filter(arr, callback));
