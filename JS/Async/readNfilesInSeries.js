// Problem
// Complete the function nSerialReader(idx, files, ansArray),
// which takes:
// 1. idx => current index, which is initially 0
// 2. files => an array of strings, which are file names
// 3. ansArray => an empty array , in which the contents should be pushed

// Write the code such that:
// 1. All the elements in files array are serially read using the fetchByCb(fileName, callback)
// 2. Add the content of each file in the ansArray.
// 3. For every file prepend it with "content->"

function fetchByCb(fileName, cb) {
  setTimeout(function () {
    cb(`content of ${fileName}`);
  }, 100 * Math.random());
}

function nSerialReader(idx, files, ansArray) {
  if (idx === files.length) return;
  fetchByCb(files[idx], (content) => {
    const str = 'content->' + content;
    ansArray.push(str);
    idx++;
    nSerialReader(idx, files, ansArray);
  });
}

const ansArray = [];
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
nSerialReader(0, files, ansArray);
setTimeout(() => {
  console.log(ansArray);
}, 200); // 200ms to ensure all operations have completed
