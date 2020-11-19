/**
 * This problem was recently asked by Twitter 
 * Given an array of integers of size n, where all elements are 
 * between 1 and n inclusive, find all of the elements of [1, n] 
 * that do not appear in the array. Some numbers may appear more than once.
 * 
 * 	Example:
 * 		Input: [4,5,2,6,8,2,1,5]
 * 		Output: [3,7]
 */

export const findMissingNums = (arr) => {
	const register = new Array(arr.length)
	const result = []

	arr.forEach(num => register[num] = 1)

	for (let i = 1; i < register.length; i++) {
		if (!register[i]) result.push(i) 
	}
	return result
}