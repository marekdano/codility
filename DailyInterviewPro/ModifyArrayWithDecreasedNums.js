/**
 * Non-decreasing Array with Single Modification
 * You are given an array of integers in an arbitrary order. 
 * Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
 * 
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 * 
 * Example:
 * 		[13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.
 * 		[13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.
 */

export const check = (arr) => {
	const len = arr.length
	let modifiedCount = 0

	// check if the last element needs 
	// to be modified or not
	if (arr[len - 1] >= arr[len - 2]) {
		arr[len - 1] = arr[len - 2] - 1
		modifiedCount++
	}

	// check if the first element needs 
	// to be modified or not
	if (arr[0] <= arr[1]) {
		arr[0] = arr[1] + 1
		modifiedCount++
	}

	// loop from 2nd element to the 2nd last one
	for (let i = len - 2; i > 0; i--) {
		if ((arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i])
			|| (arr[i - 1] >= arr[i] && arr[i + 1] >= arr[i])) {
				arr[i] = (arr[i - 1] + arr[i + 1]) / 2
				modifiedCount++
			}

			if (arr[i] === arr[i - 1] || arr[i] === arr[i + 1]) {
				return false 
			}
	}

	if (modifiedCount > 1) return false

	return true
}