/**
 * Reverse a singly linked list.
 * 
 * Example:
 * 			Input: 1->2->3->4->5->NULL
 * 			Output: 5->4->3->2->1->NULL
 * 
 * A linked list can be reversed either iteratively or recursively. Try implement both.
 */

let reverseList = {
	reverseListIteratively: (head) => {
		let prev = null;
		let curr = head;
		while (curr != null) {
			let nextNode = curr.next;
			curr.next = prev;
			prev = curr;
			curr = nextNode;
		}
		return prev;
	},
}
 

module.exports = reverseList;