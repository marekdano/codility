
let passingCars = (A) => {
  let sum = 0,
      add = 0;
      
  for (var i = 0; i < A.length; i++) {
    A[i] == 0 ? add++ : sum += add;
    if (sum > 1e9) return -1;
  }

  return sum;
}

module.exports = passingCars;