/*
Complete the function twoSeries(file1, file2, ansArray), 
which takes in two file names as file1 and file2 and ansArray
Write the code such that:
Both the files are serially read using the fetchByPromise(fileName)
Add the content of both files in the ansArray.
At the end of the contents, the ansArray should hold string "All files have been read
*/

function fetchByPromise(fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`content : ${fileName}`);
    }, 100 * Math.random());
  });
}

function twoSeries(file1, file2, ansArray) {
  const file1Promise = fetchByPromise(file1);
  file1Promise
    .then((data1) => {
      ansArray.push(data1);
      return fetchByPromise(file2);
    })
    .then((data2) => {
      ansArray.push(data2);
      ansArray.push('All files have been read');
      console.log(ansArray);
    });
}

twoSeries('FILE 1', 'FILE 2', []);
