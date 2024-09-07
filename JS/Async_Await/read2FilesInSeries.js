function fetchByPromise(fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`content : ${fileName}`);
    }, 100 * Math.random());
  });
}

async function twoSeries(file1, file2, ansArray) {
  try {
    const file1Data = await fetchByPromise(file1);
    ansArray.push(file1Data);
    const file2Data = await fetchByPromise(file2);
    ansArray.push(file2Data);
    ansArray.push('All files have been read');
    return ansArray;
  } catch (err) {
    console.error(err);
  }
}

async function read() {
  const result = await twoSeries('FILE 1', 'FILE 2', []);
  console.log(result);
}
read();

/*
output :  ['content : FILE 1', 'content : FILE 2', 'All files have been read']
*/
