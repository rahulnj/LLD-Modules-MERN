function debounce(func, wait) {
  let timer = null; // Initialize the timer variable

  // Return the debounced function
  return function (...args) {
    // Clear any existing timer
    clearTimeout(timer);

    // Set a new timer to execute the function after the specified interval
    timer = setTimeout(() => {
      // Call the original function with the provided arguments and context
      func.call(this, ...args);
    }, wait);
  };
}

const debouncedFunc = debounce((value) => console.log(value), 200);

debouncedFunc('First call'); // Should not log immediately
debouncedFunc('Second call'); // Should cancel the previous and set a new timeout
// Wait for 200 ms
// Should log "Second call" after 200 ms
