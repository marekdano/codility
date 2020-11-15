/**
 * This problem was recently asked by Amazon: 
 * You are given an array of integers. Return an array of the same size 
 * where the element at each index is the product of all the elements 
 * in the original array except for the element at that index.
 * 
 * For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].
 * 
 * NOTE: You cannot use division in this problem.
 */

export const products = (arr) => {
	const len = arr.length

	if (len === 1) return arr
	
	const left = [...Array(len)]
	const right = [...Array(len)]
	const prod = [...Array(len)]
	left[0] = 1
	right[len - 1] = 1

	for (let i = 1; i < len; i++) {
		left[i] = arr[i - 1] * left[i - 1]
	}

	for (let i = len - 2; i >= 0; i--) {
		right[i] = arr[i + 1] * right[i + 1]
	}

	for (let i = 0; i < len; i++) {
		prod[i] = left[i] * right[i]
	}

	return prod
}
