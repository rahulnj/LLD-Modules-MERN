const crypto = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 5; // can be used to increase the size of the thread pool. by default it's 4.

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('1st key is generated');
});

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('2nd key is generated');
});

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('3rd key is generated');
});

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('4th key is generated');
});

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, key) => {
  console.log('5th key is generated');
});
