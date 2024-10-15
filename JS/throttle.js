function throttle(fn, time) {
  let timeout; // Initialize the timer variable

  // Return the throttled function
  return function () {
    // If the timer is already set, exit the function
    if (timeout) return;

    const context = this; // Capture the context
    const args = arguments; // Capture the arguments
    console.log(arguments);

    // Define a callback function for the timer
    const later = () => {
      // Call the original function with context and arguments
      fn.call(context, ...args);

      // Reset the timer variable after execution
      timeout = null;
    };

    // Set the timer using setTimeout
    timeout = setTimeout(later, time);
  };
}

const throttledFunc = throttle((value) => console.log(value), 200);

throttledFunc('First call'); // Should log
throttledFunc('Second call'); // Should not log
