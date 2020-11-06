/**
 * This problem was recently asked by Uber. 
 * Given a linked list of integers, remove all consecutive nodes that sum up to 0.
 * 
 * 		Example:
 * 			Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
 * 			Output: 10
 * 
 * The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 
 * 4 -> -4 also sums up to 0 too so that sequence should also be removed.
 */

export class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

export const removeConsecutiveSumTo0 = (head) => {
	return null
}