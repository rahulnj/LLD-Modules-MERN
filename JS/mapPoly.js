function map(arr = [], callback) {
  const mappedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i]);
    mappedArray.push(result);
  }

  return mappedArray;
}

const arr = [1, 2, 3, 4, 5];
const callback = (num) => num * num;

console.log(map(arr, callback));
