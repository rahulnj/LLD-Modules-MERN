Promise.myPromiseAny = function (arrayOfPromises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arrayOfPromises)) {
      reject('Expected a array of Promises.');
      return;
    }

    let unResolvedPromises = arrayOfPromises.length;
    const errors = [];

    if (unResolvedPromises === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    arrayOfPromises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors[index] = error;
          unResolvedPromises--;
          if (unResolvedPromises === 0) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        });
    });
  });
};

// when any of the promises got rejected
const p0 = Promise.resolve(3);
const p1 = Promise.resolve(42);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Foo');
  }, 1000);
});
const p3 = Promise.reject('Error 1');
const p4 = Promise.reject('Error 2');

// Custom Promise.any
Promise.myPromiseAny([p0, p1, p2, p3, p4])
  .then((data) => {
    console.log('custom: ', data);
  })
  .catch((err) => {
    console.log('Promise got rejected with error: ' + err);
  });

// Native Promise.any
Promise.any([p0, p1, p2, p3, p4])
  .then((data) => {
    console.log('Real: ', data);
  })
  .catch((err) => {
    console.log('Promise got rejected with error: ' + err);
  });
