/**
 * This problem was recently asked by Amazon
 * Given an array of n positive integers and a positive integer s, 
 * find the minimal length of a contiguous subarray of which the sum ≥ s. 
 * If there isn't one, return 0 instead.
 * 
 * Example:
 * 		Input: s = 7, nums = [2,3,1,2,4,3]
 * 		Output: 2
 * 
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 */

export const minSubArrayLen = (arr, s) => {
	const len = arr.length
	let minLen = len + 1 
	
	for (let start = 0; start < len; start++) {
		let currentSum = arr[start]

		if (currentSum >= s) {
			return 1
		}

		for (let end = start + 1; end < len; end++) {
			currentSum += arr[end]
			
			if (currentSum >= s && (end - start + 1) < minLen) {
				minLen = (end - start + 1)
			}
		}
	}

	return minLen === len + 1 ? 0 : minLen
}
