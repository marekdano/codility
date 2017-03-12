
let dominator = (A) => {
  const len = A.length;
  let index, leader, size = 0;
 
  for(let i = 0; i < len; i++) {
    if(size === 0) {
      size++;
      value = A[i];
    } else {
      if(value !== A[i]) {
        size--;
      } else {
        size++;
      }
    }
  }
  candidate = -1;
  if(size > 0) {
    candidate = value;
    leader--;
    count = 0;
  }

  for(let i = 0; i < len; i++) {
    if(A[i] === candidate) {
      count++;
      index = i;
    }
  }
  
  return count > Math.floor(len / 2) ? index : -1;
}

module.exports = dominator;