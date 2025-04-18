// intervalTime (integer): The time interval, in milliseconds, at which the callback function should be executed.
// endTime (integer): The time, in milliseconds, when the interval execution should stop.
// message (string): The message to be appended to the array arr during each execution of the callback function.
// arr (array): An array where the messages from the callback function will be stored.
// Your task is to implement the mySetInterval function and use it within the main function.

// callback (function): The callback function to be executed repeatedly at the specified time interval.
// time (integer): The time interval, in milliseconds, at which the callback function should be executed.
// Inside the mySetInterval function, you need to implement the logic to execute the callback function
// repeatedly at the specified time interval until explicitly stopped.

function main(intervalTime, endTime, message, arr) {
  function customSetInterval(callback, time) {
    const interval = {
      working: true,
    };

    function setter() {
      if (!interval.working) return;
      callback();
      setTimeout(setter, time);
    }

    setTimeout(setter, time);
    return interval;
  }

  const intervalHandler = customSetInterval(() => {
    console.log(message);
    arr.push(message);
  }, intervalTime);

  setTimeout(() => {
    intervalHandler.working = false;
  }, endTime);
}

const ansArray = [];
main(2000, 8000, 'Hello World', ansArray);
