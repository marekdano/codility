/**
 *  This problem was recently asked by LinkedIn. 
 * Given a non-empty array where each element represents 
 * a digit of a non-negative integer, add one to the integer. 
 * The most significant digit is at the front of the array 
 * and each element in the array contains only one digit. 
 * Furthermore, the integer does not have leading zeros, 
 * except in the case of the number '0'.
 * 
 * 	Example:
 * 			Input: [2,3,4]
 * 			Output: [2,3,5]
 */

export const plusOne = (arr) => {
	if (!arr.every(num => typeof num === 'number')) return -1
	const incrementedNum = Number.parseInt(arr.join('')) + 1
	return incrementedNum.toString().split('').map(str => Number.parseInt(str))
}