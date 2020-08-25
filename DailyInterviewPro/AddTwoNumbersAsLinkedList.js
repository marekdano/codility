/**
 * You are given two linked-lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * Example:
 * 		Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 		Output: 7 -> 0 -> 8
 * 
 * 		Explanation: 342 + 465 = 807
 */

export class ListNode {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

export const addTwoNumbersAsLinkedList = (list1, list2) => {
	function convertLinkedListToNumber(list) {
		let current = list
		let stringNumber = current.value.toString()
		while(current.next) {
			stringNumber = current.next.value.toString() + stringNumber
			current = current.next
 		}
		return +stringNumber
	}

	function convertNumberToLinkedList(number) {
		let head
		let pointer
		number.toString().split('').reverse().forEach((num, index) => {
			const node = new ListNode(+num)
			if (index === 0) {
				head = node
				pointer = node
			} else {
				pointer.next = node
				pointer = pointer.next
			}
		})

		return head
	}

	return convertNumberToLinkedList(convertLinkedListToNumber(list1) + convertLinkedListToNumber(list2))
}