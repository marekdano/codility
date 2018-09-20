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

const fib = (n) => {};

// the worst solution
const fib = (n) => {
	if (n === 0 || n === 1) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

module.exports = fib;