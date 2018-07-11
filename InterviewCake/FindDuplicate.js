/**
 * Find a duplicate
 * 
 * We have an array of integers, where:
 * 		The integers are in the range 1..n
 * 		The array has a length of n+1n+1
 * 
 * It follows that our array has at least one integer which appears at least twice. 
 * But it may have several duplicates, and each duplicate may appear more than twice.
 * 
 * Write a function which finds an integer that appears more than once in our array. 
 * (If there are multiple duplicates, you only need to find one of them.)
 * 
 * We need to optimize the solution for space!
 */

// SOLUTION should be O(n lg n) time and O(1) space.

const findDuplicate = {}

module.exports = findDuplicate;