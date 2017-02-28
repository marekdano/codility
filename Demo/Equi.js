
let equi = (A, N) => {
  let sumPreffix = [0];
  let totalSuffix = 0;

  for(let i = 1; i < A.length; i++) { 
    sumPreffix[i] = sumPreffix[i-1] + A[i-1]; 
  }

  for(let j = A.length-1; j >= 0; j--) {
    if(N-1 === j && sumPreffix[j] === 0) {
      return j;
    } else if(sumPreffix[j] === totalSuffix) {
      return j;
    } else {
      totalSuffix += A[j];
    }
  }
  return -1;   
}

module.exports = equi;