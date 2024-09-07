function fetchByPromise(fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`content : ${fileName}`);
    }, 100 * Math.random());
  });
}

async function nSeries(fileArray, ansArray) {
  try {
    for (const file of fileArray) {
      const data = await fetchByPromise(file);
      ansArray.push(data);
    }
    ansArray.push('All files have been read');
    return ansArray;
  } catch (error) {
    console.error(error);
  }
}

async function read() {
  const fileArray = ['FILE 1', 'FILE 2'];
  nSeries(fileArray, []);
  const result = await nSeries(fileArray, []);
  console.log(result);
}
read();

/*
output :  ['content : FILE 1', 'content : FILE 2', 'All files have been read']
*/
