/**
 * This problem was recently asked by Amazon. 
 * You are given an array of integers. 
 * Return the length of the longest consecutive elements sequence in the array.
 * 
 * For example, the input array [100, 4, 200, 1, 3, 2] 
 * has the longest consecutive sequence 1, 2, 3, 4, and thus, 
 * you should return its length, 4.
 * 
 * Note: Can you do this in linear time?
 */

export const longestConsecutiveSeq = (nums) => {
	const numSet = new Set()
	let count = 0
	
	for (let num of nums) {
		numSet.add(num)
	}

	for (let i = 0; i < nums.length; i++) {
		if (!numSet.has(nums[i] - 1)) {

			// check for next elements in the sequence
			let j = nums[i]
			while (numSet.has(j)) {
				j++
			}

			if (count < j - nums[i]) {
				count = j - nums[i]
			}
		}
	}
	return count
}