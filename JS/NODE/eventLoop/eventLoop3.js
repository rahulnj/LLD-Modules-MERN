const fs = require('node:fs');

setImmediate(() => console.log('set Immediate'));

setTimeout(() => console.log('Set timeout expired'), 0);

Promise.resolve('Promise').then(console.log);

fs.readFile('../file.txt', 'utf8', () => {
  setTimeout(() => console.log('2nd Set timeout expired'), 0);

  process.nextTick(() => console.log('2nd nextTick'));

  setImmediate(() => console.log('2nd set Immediate'));

  console.log('file read completed');
});

process.nextTick(() => console.log('nextTick'));

console.log('End of the code');

/*
End of the code
nextTick
Promise
Set timeout expired
set Immediate
file read completed
2nd nextTick
2nd set Immediate
2nd Set timeout expired
 */
