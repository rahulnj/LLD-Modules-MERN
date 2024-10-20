const fs = require('node:fs');
const https = require('node:https');

console.log('first call');

var a = 2;
var b = 3;

const data = fs.readFileSync('./file.txt', 'utf8');
console.log('file read done using readFileSync: ', data);

https
  .get('https://dummyjson.com/products/1', (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
      const parsedData = JSON.parse(data);
      console.log('Data fetched successfully');
    });
  })
  .on('error', (err) => {
    console.error('Error fetching data:', err);
  });

setTimeout(() => {
  console.log('settimeout called after 5 seconds');
}, 5000);

fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log('file read done: ', data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log('Output of multiplication func: ', c);
