const fs = require('node:fs');

const a = 100;

setImmediate(() => console.log('set Immediate called'));

fs.readFile('./file.txt', 'utf8', () => {
  console.log('file read completed');
});

// The execution mechanism is essentially the same for both setTimeout calls,
// as they both schedule their callbacks to be executed after a delay of 0 milliseconds.
// However, the order in which they are queued and executed can differ based on their position in the code.

setTimeout(() => console.log('Set timeout 1 expired'), 0);
setTimeout(() => console.log('Set timeout 2 expired'));

function printA() {
  console.log(a);
}

printA();

console.log('End of the code');
