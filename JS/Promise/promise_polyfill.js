const PROMISE_STATES = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

// Function Constructor for CustomPromise.
function CustomPromise(executeFn) {
  // Initial state and result value.
  let PROMISE_STATE = PROMISE_STATES.PENDING;
  let RESULT_VALUE = undefined;

  // Arrays to hold success and failure callbacks.
  let SUCCESS_CALLBACK_ARRAY = [];
  let FAILURE_CALLBACK_ARRAY = [];

  // Resolve function to transition from pending to resolved state.
  //   Make sure that if promsie get resolved you are not supposed to resolve the same promise again.
  const resolve = (value) => {
    if (PROMISE_STATE !== PROMISE_STATES.PENDING) return;

    PROMISE_STATE = PROMISE_STATES.RESOLVED;
    RESULT_VALUE = value;

    // Call all success callbacks.
    SUCCESS_CALLBACK_ARRAY.forEach((callback) => {
      callback(RESULT_VALUE);
    });
  };

  // Reject function to transition from pending to rejected state.
  // 1. Make sure that if promsie get rejected you are not supposed to reject the same promise again.
  const reject = (error) => {
    if (PROMISE_STATE !== PROMISE_STATES.PENDING) return;

    PROMISE_STATE = PROMISE_STATES.REJECTED;
    RESULT_VALUE = error;

    // Call all failure callbacks.
    FAILURE_CALLBACK_ARRAY.forEach((callback) => {
      callback(RESULT_VALUE);
    });
  };

  // Method to handle success callbacks (then).
  this.then = function (cb) {
    if (PROMISE_STATE === PROMISE_STATES.RESOLVED) {
      cb(Value);
    } else if (PROMISE_STATE === PROMISE_STATES.PENDING) {
      SUCCESS_CALLBACK_ARRAY.push(cb);
    }
    return this; // Enable chaining; By returning this, the method returns the current instance of CustomPromise.
  };

  // Method to handle failure callbacks (catch).
  this.catch = function (cb) {
    if (PROMISE_STATE === PROMISE_STATES.REJECTED) {
      cb(Value);
    } else if (PROMISE_STATE === PROMISE_STATES.PENDING) {
      FAILURE_CALLBACK_ARRAY.push(cb);
    }
    return this; // Enable chaining; By returning this, the method returns the current instance of CustomPromise.
  };

  // Execute the provided function with resolve and reject.
  executeFn(resolve, reject);
}

const executeFn = (resolve, reject) => {
  // cb based fn.
  setTimeout(() => {
    resolve("Hey there I'm resolved.");
  }, 1000);

  // cb based fn.
  setTimeout(() => {
    reject("Hey there I'm rejected.");
  }, 2000);
};

// Usage of the custom promise.
const myPromise = new CustomPromise(executeFn);

console.log('Before');

const cb = (data) => {
  console.log(data);
};

console.log(myPromise);

myPromise.then(cb).then(cb).then(cb).then(cb);

myPromise.then((data) => {
  console.log('I am the second then: ', data);
});

myPromise.catch((err) => {
  console.log('Error: ', err);
});

myPromise.catch((data) => {
  console.log('I am the second catch');
});

console.log('After');
