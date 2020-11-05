/**
 * Find the Single Element in an Array of Duplicates
 * This problem was asked by Apple
 * Given an array of integers, arr, where all numbers occur twice except one number which occurs once, 
 * find the number. Your solution should ideally be O(n) time and use constant extra space.
 */

export const findSingleElemInArray = (arr) => {
	return arr.reduce((result, elem) => result ^ elem)
} 