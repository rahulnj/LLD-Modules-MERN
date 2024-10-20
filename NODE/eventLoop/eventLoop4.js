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

  // before these three async operations the operations which are already ready in
  // callback queue will be executed.
  setTimeout(() => console.log('Set timeout next tick'), 0);
  Promise.resolve('Promise next tick').then(console.log);
  setImmediate(() => console.log('set Immediate next tick'));
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
