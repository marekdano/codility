/**
 * This problem was recently asked by Facebook:
 * 
 * Given an array nums, write a function to move all 0's to the end of it 
 * while maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 		Input: [0,1,0,3,12]
 * 		Output: [1,3,12,0,0]
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

export const moveZeros = (arr) => {
	let count = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[count] = arr[i] 
			count++
		}
	}

	while (count < arr.length) {
		arr[count++] = 0
	}
	
	return arr 
}