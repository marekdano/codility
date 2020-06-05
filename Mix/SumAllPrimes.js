/**
 * Sum all the prime numbers up to and including the provided number.
 * 
 * A prime number is defined as a number greater than one and having only two divisors,
 * one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * The provided number may not be a prime.
 * 
 * Example:
 * 
 * sumAllPrimes(10) should return 17
 * sumAllPrimes(977) should return 73156
 */

function sumAllPrimes(num) {
	const primes = [];

	for(let i = 2; i <= num; i++) {
		if (isPrime(i)) primes.push(i);
	}
	return primes.reduce((sum, n) => sum + n, 0);
}

function isPrime(num) {
	for(let i = 2; i <= Math.sqrt(num); i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return num > 1;
}
