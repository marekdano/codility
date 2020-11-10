/**
 * This problem was recently asked by Uber
 * 
 * Given a number of integers, combine them so it would create the largest number.
 * 
 * Example:
 * 			Input:  [17, 7, 2, 45, 72]
 * 			Output:  77245217
 */

export const largestNum = (nums) => {
	const numsOfStrings = nums.map(num => '' + num)

	numsOfStrings.sort((a, b) => {
		const xy = a + b
		const yx = b + a
		return +xy < +yx
	})
	
	return +numsOfStrings.join('')
} 