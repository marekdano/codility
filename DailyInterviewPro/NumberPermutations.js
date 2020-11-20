/**
 * This problem was recently asked by Facebook. 
 * You are given an array of integers. Return all the permutations of this array.
 */

export const permute = (arr) => {
	if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;

	return arr.reduce((result, item, index) =>
		result.concat(
			permute([...arr.slice(0, index), ...arr.slice(index + 1)])
				.map(nums => [item, ...nums])
		), [])
}