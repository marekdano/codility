/**
 * Given a singly-linked list, reverse the list. 
 * This can be done iteratively or recursively. Can you get both solutions?
 * 
 * Example:
 * 		Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
 * 		Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL
 */

export class ListNode {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

export const getListValues = (list) => {
	let node = list
	let result = ''

	while (node !== null) {
		result += +node.value + ' '
		node = node.next
	}
	return result.trim()
}

export const reverseListIteratively = (list) => {
	return null
} 

export const reverseListRecursively = (list) => {
	return null
}

