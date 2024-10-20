const fs = require('node:fs');

const a = 100;

setImmediate(() => console.log('set Immediate called'));

Promise.resolve('Promise').then(console.log);

fs.readFile('../file.txt', 'utf8', () => {
  console.log('file read completed');
});

setTimeout(() => console.log('Set timeout expired'), 0);

process.nextTick(() => console.log('process.nextTick'));

function printA() {
  console.log(a);
}

printA();

console.log('End of the code');

/*
100
End of the code
process.nextTick
Promise
Set timeout expired
set Immediate called
file read completed
*/
