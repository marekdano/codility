
let tapeEquilibrium = (A, N) => {
  
  let min, diff = 0, sumPartRight = 0, sumPartLeft = 0;
  // sum all values in array A
  // and set min to be sum
  min = sumPartRight = A.reduce((a, b) => {
    return a + b;
  }, 0);

  // add value in the index-1 to the left part 
  // and remove that value from the right part    
  for(let i = 1; i < N; i++) {
    sumPartLeft += A[i-1];
    sumPartRight -= A[i-1];
    diff = Math.abs(sumPartLeft - sumPartRight);
    if(min > diff) {
      min = diff;
    }
  }

  return min;
};

module.exports = tapeEquilibrium;
