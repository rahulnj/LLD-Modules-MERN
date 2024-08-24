// Example : Deep copy Object ----------------------
let ingredients_list = {
  dish: 'noodles',
  recipe: { list: ['eggs', 'flour', 'water'] },
};

function makeDeepCopy1(object) {
  let clonedObj = {};

  Object.keys(object).map((prop) => {
    if (Array.isArray(object[prop])) {
      clonedObj[prop] = [].concat(object[prop]);
    } else if (typeof object[prop] === 'object') {
      clonedObj[prop] = makeDeepCopy1(object[prop]);
    } else {
      clonedObj[prop] = object[prop];
    }
  });

  return clonedObj;
}

console.log(makeDeepCopy1(ingredients_list));

// Another solution

function makeDeepCopy2(object) {
  const clonedObj = JSON.parse(JSON.stringify(object));

  return clonedObj;
}

console.log(makeDeepCopy2(ingredients_list));
// ----------------------
