/**
 * This problem was recently asked by Apple. 
 * Given an array with n objects colored red, white or blue, sort them in-place 
 * so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Note: You are not suppose to use the library’s sort function for this problem. Can you do this in a single pass?
 * 
 * Example: 
 * 			Input: 	[2,0,2,1,1,0]
 * 			Output: [0,0,1,1,2,2]
 */

export const sortColors = (nums) => {
	if (nums.length < 2) return nums

	const countArray = [0,0,0]
	for (let k = 0; k < nums.length; k++) {
		countArray[nums[k]]++
	}

	let i = 0 // index in countArray
	let j = 0 // index in nums

	while(i <= 2) {
		if (countArray[i] !== 0) {
			nums[j] = i
			countArray[i] = countArray[i] - 1
			j++
		} else {
			i++
		}
	}
	return nums
}