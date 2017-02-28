
let frogRiverOne = (A, X) => {
  // create an array of size X with false elements
  let uniqness = [...new Array(X)]
                   .map((el) => { return false });
  // set total to be X
  let total = X;

  for(let i = 0; i < A.length; i++) {
    // get index of unique number
    const uniqIndex = A[i] - 1;
    if(!uniqness[uniqIndex]) {
      uniqness[uniqIndex] = true;
      total--;
    }
    if(total === 0) return i;
  } 
  
  return -1;
}

module.exports = frogRiverOne;