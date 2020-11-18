/**
 * This problem was recently asked by Microsoft. 
 * You are given an array of integers. Return the largest product 
 * that can be made by multiplying any 3 integers in the array.
 * 
 * Example:
 * 		[-4, -4, 2, 8] should return 128 
 * 		as the largest product can be made by multiplying 
 * 		-4 * -4 * 8 = 128.
 */

export const maximumProductOfThree = (arr) => {
	if (arr.length < 3) return 0
	const n = arr.length

	arr.sort((a, b) => a > b)
	
	return Math.max(arr[0] * arr[1] * arr[n - 1], arr[n-3] * arr[n-2] * arr[n-1])
}