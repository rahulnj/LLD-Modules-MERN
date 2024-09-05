// Problem 1:
let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('some value'));
  }, 2000);

  resolve('some error');

  setTimeout(function () {
    reject(new Error('some value'));
  }, 2000);

  resolve('some error');

  setTimeout(function () {
    reject(new Error('some value'));
  }, 2000);
});

// The promise is created with a function that has resolve and reject as arguments.
// Inside this function, three setTimeout calls are set up to reject the promise after 2 seconds,
// but these calls are essentially irrelevant because the resolve('some error') line executes immediately,
// resolving the promise.

// First resolve:

// The promise is resolved with the value 'some error' immediately.
// Once the promise is resolved, any further resolve or reject calls are ignored.
// Therefore, the subsequent setTimeout calls to reject the promise have no effect.

p.then(null, function (err) {
  console.log(1);
  console.log(err);
});

/*
p.then(onFulfilled, onRejected);
onFulfilled: a function that is called if the promise is resolved.
onRejected: a function that is called if the promise is rejected.

.catch Method
The .catch method is a shorthand for handling rejected promises. It is essentially the same as calling
.then with null as the first argument and the rejection handler as the second argument.

p.catch(onRejected); - This is equivalent to p.then(null, onRejected);.

Both .then and .catch can handle promise rejections, but .catch is specifically designed for that purpose,
making the code more readable and focused.

let p = new Promise((resolve, reject) => {
  reject(new Error('something went wrong'));
});

Using onRejected in .then
p.then(null, (err) => {
  console.log('Handled by .then:', err.message);
});

Using .catch
p.catch((err) => {
  console.log('Handled by .catch:', err.message);
});

*/
p.catch(function (err) {
  console.log(2);
  console.log(err);
});

p.finally(function () {
  console.log(1);
});

p.finally(function () {
  console.log(2);
}).then(function (val) {
  console.log(val);
});

p.then(
  function (val) {
    console.log(val);
  },
  function (err) {
    console.log(err);
  }
);

// output : 1 2 some error some error

// Problem 2:
console.log(1);
setTimeout(function () {
  console.log(3);
});
console.log(4);
setTimeout(function () {
  console.log(2);
});
Promise.resolve().then(function () {
  console.log(5);
});
console.log(6);
// output : 1 4 6 5 3 2

// Problem 3:
Promise.resolve(1)
  .finally((data) => {
    console.log(data);
    return Promise.reject('error');
  })
  .catch((error) => {
    console.log(error);
    throw 'error2';
  })
  .finally((data) => {
    console.log(data);
    return Promise.resolve(2).then(console.log);
  })
  .then(console.log)
  .catch(console.log);

// output : undefined error undefined 2 error2

// Problem 4:
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2]);
  const group2 = await Promise.all([promise3, promise4]);
  return [group1, group2];
};

promiseAll().then(console.log).catch(console.log);
// output : 4
