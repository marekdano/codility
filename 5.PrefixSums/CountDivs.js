
let countDivs = (A, B, K) => {
  //solution with O(1)
  // count only numbers of divisibility by K in range [A..B]
  return Math.floor(B / K) - Math.floor((A - 1) / K);


//solution with O(n)  
// let countDivisions = 0;

// for(let i = A; i <= B; i++) {
//   if(i % K === 0) {
//     countDivisions++;
//   }
// }
// return countDivisions;
}

module.exports = countDivs;