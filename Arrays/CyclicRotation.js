
let cyclicRotation = (A, K) => {
  const len = A.length;
  // Check if len and K is value of 0
  if (!len || !K) return A;

  // 1. solution
  // Shift the values by K
  //const index = K > len ? len - (K % len) : len - K;
  //return [...A.slice(index), ...A.slice(0, index)];

  //2. solution
  K = K % len;
  let part = A.splice(len - K);
  return part.concat(A);
}


module.exports = cyclicRotation;