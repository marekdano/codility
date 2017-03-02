
let distinct = (A) => {
  
  // 1.solution
  const len = A.length;
  let count = 1;

  A.sort((a, b) => { 
    return a - b; 
  });

  for(let i = 1; i < len; i++) {
    if(A[i-1] !== A[i]) {
      count++;
    }
  }
  return count;

//   // 2.solution
//   const s = new Set(A);
//   return s.size;
}

module.exports = distinct;