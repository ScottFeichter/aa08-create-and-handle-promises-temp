function stretch() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      console.log(`done stretching`);
      resolveFunc();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      console.log(`done runningOnTreadmill`);
      resolveFunc();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      console.log(`done liftWeights`);
      resolveFunc();
    }, 2000);
  });
}

function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .finally(() => console.log(`done working out`));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
