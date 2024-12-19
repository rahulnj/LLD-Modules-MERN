Promise.myPromiseAll = function (arrayOfPromises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arrayOfPromises)) {
      reject('Expected a array of Promises.');
      return;
    }

    let unResolvedPromises = arrayOfPromises.length;
    const resolvedPromiseArray = new Array(unResolvedPromises);

    if (unResolvedPromises === 0) {
      resolve(resolvedPromiseArray);
      return;
    }

    arrayOfPromises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolvedPromiseArray[index] = value;
          unResolvedPromises--;

          if (unResolvedPromises === 0) {
            resolve(resolvedPromiseArray);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// when any of the promises got rejected.
const p0 = Promise.resolve(3);
const p1 = Promise.resolve(42);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Foo');
  }, 1000);
});

Promise.myPromiseAll([p0, p1, p2])
  .then((data) => {
    console.log('Custom Promise: ', data);
  })
  .catch((err) => {
    console.log('Promise got rejected with error: ' + err);
  });

// Native Promise.all
Promise.all([p0, p1, p2])
  .then((data) => {
    console.log('Real Promise: ', data);
  })
  .catch((err) => {
    console.log('Promise got rejected with error: ' + err);
  });
