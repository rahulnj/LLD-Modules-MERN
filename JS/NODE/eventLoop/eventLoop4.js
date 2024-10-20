const fs = require('node:fs');

setImmediate(() => console.log('set Immediate'));

setTimeout(() => console.log('Set timeout expired'), 0);

Promise.resolve('Promise').then(console.log);

fs.readFile('../file.txt', 'utf8', () => {
  console.log('file read completed');
});

process.nextTick(() => {
  process.nextTick(() => console.log('inner next tick'));
  console.log('nextTick');
});

console.log('End of the code');

/*
End of the code
nextTick
inner next tick
Promise
Set timeout expired
set Immediate
file read completed
*/
