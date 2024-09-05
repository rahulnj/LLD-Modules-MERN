function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function cb(result) {
        resolve(result);
      }

      fn.apply(this, [...args, cb]);
    });
  };
}

function exampleFn(a, b, cb) {
  cb(a + b);
}

const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log(res));

// Output: 20;
