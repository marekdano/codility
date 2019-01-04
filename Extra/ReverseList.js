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
	// Time complexity O(n) and Space complexity O(1)
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

	// Time complexity O(n) and Space complexity O(n)
	reverseListRecursively: (head) => {
		if (head == null || head.next == null) {
			return head;
		}
		let node = reverseList.reverseListRecursively(head.next);
		head.next.next = head;
		head.next = null;
		return node;
	}
}
 

module.exports = reverseList;