/**
 * Hooray! It's opposite day. Linked lists go the opposite way today.
 * Write a function for reversing a linked list.
 * 
 * Your function will have one input: the head of the list.
 * Your function should return the new head of the list.
 * 
 * Here's a sample linked list node class:
 * 		
 * 		class LinkedListNode {
 * 				constructor(value) {
 * 						this.value = value;
 * 						this.next = null;
 * 				}
 * 		}
 * 
 */

 // COMPLEXITY
 // O(n) time and O(1) space. We pass over the list only once, and maintain a constant number of variables in memory.

 // We're careful to copy currentNode.next into nextNode before setting currentNode.next to previousNode. 
 // Otherwise "stepping forward" at the end could actually mean stepping back to previousNode!
 // We return previousNode because when we exit the list, currentNode is null. 
 // Which means that the last node we visited—previousNode—was the tail of the original list, 
 // and thus the head of our reversed list.

const reverse = (headOfList) => {
	let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  // Until we have 'fallen off' the end of the list
  while (currentNode) {

    // Copy a pointer to the next element
    // before we overwrite currentNode.next
    nextNode = currentNode.next;

    // Reverse the 'next' pointer
    currentNode.next = previousNode;

    // Step forward in the list
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
};

module.exports = reverse;
