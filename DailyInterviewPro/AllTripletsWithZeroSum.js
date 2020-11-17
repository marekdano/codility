/**
 * This problem was recently asked by Twitter. 
 * Given an array, nums, of n integers, find all unique triplets
 * (three numbers, a, b, & c) in nums such that a + b + c = 0. 
 * Note that there may not be any triplets that sum to zero in nums, 
 * and that the triplets must not be duplicates.
 * 
 * Example:
 * 			Input: nums = [0, -1, 2, -3, 1]
 * 			Output: [[0, -1, 1], [2, -3, 1]]
 */

export const treeSum = (arr) => {
	const len = arr.length
	const triplets = []

	for (let i = 0; i < len - 1; i++) {
		const numSet = new Set()

		for (let j = i + 1; j < len; j++) {
			const x = - (arr[i] + arr[j])
			if (numSet.has(x)) {
				triplets.push([arr[i], x, arr[j]])
			} else {
				numSet.add(arr[j])
			}
		}
	}
	return triplets
}