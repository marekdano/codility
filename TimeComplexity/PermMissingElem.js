
let permMissingElem = (A, N) => {

  // Sum all from 1..(N + 1) by formula n * (n + 1) / 2
  const total = N * (N + 1) / 2;

  // Sum all values in A 
  const totalA = A.reduce((a,b) => {
    return a + b
  }, 0);

  return total - totalA;
}

module.exports = permMissingElem;