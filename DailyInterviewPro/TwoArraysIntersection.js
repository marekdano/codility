/**
 * This problem was recently asked by Amazon. 
 * Given two arrays, write a function to compute their intersection 
 * The intersection means the numbers that are in both arrays.
 * 
 * Example 1: 
 * 			Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * 			Output: [2]
 * 
 * Example 2:
 * 			Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 			Output: [9,4]
 * 
 * Note: Each element in the result must be unique. The result can be in any order.
 */

export const intersection = (arr1, arr2) => {
	arr1 = [...new Set(arr1)]
	arr2 = [...new Set(arr2)]
	return arr1.filter(num => arr2.includes(num))
}