const crypto = require('node:crypto');

console.log('first call');

var a = 3;
var b = 4;

// Sync operation
const key = crypto.pbkdf2Sync('password123', 'salt', 50000000, 50, 'sha512');
console.log('first key: ', key);

// Async operation
crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('second key is generated: ', key);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log('Output of multiplication func: ', c);
