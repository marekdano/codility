
let missingInteger = (A) => {

  // 1.solution
  A.sort((a, b) => {
    return a - b
  });

  for(let i = 0; i < A.length - 1; i++) {
    if(A[i] + 1 !== A[i+1]) { 
      if(A[i] == A[i+1]) {
        continue;
      } else {
        return A[i] + 1;
      }
    }
    
  }
  return null;

  // //2.solution
  // // create a set from A
  // const occurrences = new Set(A);

  // // while loop from 1 to last element,
  // // return when the number is not in the set
  // let index = 1;
  // while(occurrences.has(index)) {
  //   index++;
  // }
  // return index;
}

module.exports = missingInteger;