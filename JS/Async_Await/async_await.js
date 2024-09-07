//Problem 1:
function resolveAfterNSeconds(n, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  a.then(async function (x) {
    let y = await resolveAfterNSeconds(2000, 2);
    let z = await resolveAfterNSeconds(1000, 3);
    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(1000, 5);
    console.log(x + y + z + (await p) + (await q));
  });
})();

/*
output : 15 after 6 seconds

Step 1: resolveAfterNSeconds(1000, 1) takes 1 second.
Step 2: resolveAfterNSeconds(2000, 2) takes 2 seconds.
Step 3: resolveAfterNSeconds(1000, 3) takes 1 second.
Step 4: p and q are awaited together:
p takes 2 seconds.
q takes 1 second.
However, note that p and q start at the same time, after z has been awaited.
The longer of the two (which is p) dictates the additional time.
*/

// Problem 2:
const createPromise = () => Promise.resolve(1);

function func1() {
  createPromise().then(console.log);
  console.log(2);
}

async function func2() {
  await createPromise();
  console.log(3);
}

console.log(4);
func1();
func2();

/*
output: 4 2 1 3
*/
