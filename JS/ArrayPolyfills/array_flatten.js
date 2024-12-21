Array.prototype.flatten = function () {
  let flattenedArray = [];
  const array = this;

  array.forEach((prop) => {
    if (Array.isArray(prop)) {
      const returnedArray = prop.flatten();
      flattenedArray = [...flattenedArray, ...returnedArray];
    } else {
      flattenedArray.push(prop);
    }
  });

  return flattenedArray;
};

const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
console.log(array.flatten());
