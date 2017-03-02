
let maxProductOfThree = (A) => {
  let max = -Infinity;
  const N = A.length;

  A.sort((a, b) => {
    return a - b;
  });

  let head = A[0] * A[1] * A[N-1];
  let tail = A[N-1] * A[N-2] * A[N-3];

  return Math.max(head, tail);
}

module.exports = maxProductOfThree;