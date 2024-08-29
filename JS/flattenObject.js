const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: {
      two: 2,
    },
  },
};

function flattenObj(ob) {
  function flattenObjectWithPath(obj, prefix = '') {
    let result = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = prefix !== '' ? `${prefix}.${key}` : key;

        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          Object.assign(result, flattenObjectWithPath(obj[key], newKey));
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }
  return flattenObjectWithPath(ob, '');
}

console.log(flattenObj(obj));

// Output:
// {
//     'newObj.obj2.obj5.one': 1,
//     'obj3.obj4.two': 2,
// }
