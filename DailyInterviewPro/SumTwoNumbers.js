/**
 * This problem was recently asked by Facebook.
 * You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
 * 
 * Example:
 * 		Given [4, 7, 1, -3, 2] and k = 5, return "true" since 4 + 1 = 5.
 */

export const sumTwoNumbers = (array, k) => {
	const differenceNums = []
	array.forEach(num => differenceNums.push(k-num))
	const allNums = [...array, ...differenceNums]

	return [...new Set(allNums)].length !== allNums.length
}