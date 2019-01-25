/**
 * Write a function to delete a node (except the tail) in a singly linked list, 
 * given only access to that node.
 * 
 * Given linked list -- head = [4,5,1,9], which looks like following:
 * 
 * Examples:
 * 		Input: head = [4,5,1,9], node = 5
 * 		Output: [4,1,9]
 * 		Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
 * 
 * 		Input: head = [4,5,1,9], node = 1
 * 		Output: [4,5,9]
 * 		Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 * 
 * Note:
 * 	The linked list will have at least two elements.
 * 	All of the nodes' values will be unique.
 * 	The given node can be the tail.
 */

const deleteNode = (head, nodeValue) => {
	let prevNode = null;
	let currNode = head;

	if (head.value === nodeValue) {
		head = head.next;
		return;
	}

	while(currNode != null && currNode.value !== nodeValue) {
		prevNode = currNode;
		currNode = currNode.next;
	} 
	prevNode.next = currNode.next;
};

module.exports = deleteNode;
