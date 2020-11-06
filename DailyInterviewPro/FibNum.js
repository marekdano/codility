/**
 * This problem was recently asked by Apple. 
 * The Fibonacci sequence is the integer sequence defined by the recurrence relation: 
 * F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1. 
 * In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers. 
 * Below are the first few values of the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
 * 
 * Given a number n, print the n-th Fibonacci Number.
 */

export const getFibNum = (position) => {
	const fib = (num) => {
		if (num < 3) return 1

		return fib(num-1) + fib(num-2)
	}
	return fib(position)
}