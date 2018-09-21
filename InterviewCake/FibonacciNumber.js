/**
 * Write a function fib() that takes an integer n 
 * and returns the nth Fibonacci number.
 * 
 * Let's say our Fibonacci series is 0-indexed and starts with 0. 
 * So:
 * 
 *  fib(0);  // => 0
 *  fib(1);  // => 1
 *  fib(2);  // => 1 
 *  fib(3);  // => 2
 *  fib(4);  // => 3
 *  ...
 * 
 * Try to do this with O(n) time and O(1) space.
 */

// the best solution with complexity O(n) time and O(1) space.
const fib = (n) => {
	// Edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0;  // 0th fibonacci
  let prev = 1;      // 1st fibonacci
  let current;       // Declare current

  for (let i = 1; i < n; i++) {

    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

//******************************************** */
// better solution with memoization

// class Fibber {
//   constructor() {
//     this.memo = {};
//   }

//   fib(n) {

//     // Edge case: negative index
//     if (n < 0) {
//       throw new Error(`Index was negative. No such thing 
//												as a negative index in a series.`);
//     }

//     // Base case: 0 or 1
//     else if (n === 0 || n === 1) {
//       return n;
//     }

//     // See if we've already calculated this
//     if (this.memo.hasOwnProperty(n)) {
//       return this.memo[n];
//     }

//     const result = this.fib(n - 1) + this.fib(n - 2);

//     // Memoize
//     this.memo[n] = result;

//     return result;
//   }
// }

/************************************************ */
// the worst solution with total runtime of O(2^n)

// const fib = (n) => {
// 	if (n === 0 || n === 1) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

module.exports = fib;