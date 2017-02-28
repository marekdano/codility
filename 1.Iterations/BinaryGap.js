'use strict';

// var binaryGap = (N) => {
//   // convert N to binary and split in '1'
//   const binary = N.toString(2).split('1');

//   // find the max value of binary gap
//   let max = 0;
//   for(let i=1; i<binary.length - 1; i++) {
//     const len = binary[i].length;
//     if (max < len) max = len;
//   }
//   return max;
// }

// OR

var binaryGap = (N) => {
  const binary = N.toString(2).split("");
  let max = 0, count = 0;

  for(let i=1, len=binary.length; i<len; i++) {
    if(binary[i] == 0) {
      count++;
    } else {
      if(count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}


module.exports = binaryGap;
