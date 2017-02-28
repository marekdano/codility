
let permCheck = (A) => {
  
  // 1.solution
  A.sort((a, b) => {
    return a - b
  });

  for(let i = 0; i < A.length - 1; i++) {
    if(A[i] + 1 !== A[i+1]) {
      return 0;
    } 
  }
  return 1;

//   // 2.solution
//   const N = A.length;
//   const occurrences = new Set();

//   // add each occurrence to the set
//   for (let i = 0; i < N; i++) {
//     occurrences.add(A[i]);
//   }

//   // loop from 1..N to check if any number missing
//   for (let i = 1; i <= N; i++) {
//     if (!occurrences.has(i)) return 0;
//   }
//   return 1;

}

module.exports = permCheck;