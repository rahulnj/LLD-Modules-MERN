// Raw Problem
// Complete the function twoSeries(file1, file2, ansArray),
// which takes in two file names as file1 and file2 and ansArray

// Write the code such that:
// 1. Both the files are serially read using the fetchByCb(fileName, callback)
// 2. Add the content of both files in the ansArray.
// 3. At the end of the contents, the ansArray should hold string "All files have been read"

function fetchByCb(fileName, cb) {
  setTimeout(function () {
    cb(`content : ${fileName}`);
  }, 100 * Math.random());
}

function twoSeries(file1, file2, ansArray) {
  function cb1(content) {
    ansArray.push(content);
    fetchByCb(file2, cb2);
  }

  function cb2(content) {
    ansArray.push(content);
    ansArray.push('All files have been read');
  }

  fetchByCb(file1, cb1);
}

const ansArray = [];
twoSeries('FILE 1', 'FILE 2', ansArray);
setTimeout(() => {
  console.log(ansArray);
}, 200); // 200ms to ensure all operations have completed

// Output : ['content : FILE 1', 'content : FILE 2', 'All files have been read']
