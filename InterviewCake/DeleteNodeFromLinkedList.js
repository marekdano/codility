/**
 * Delete a node from a singly-linked list, given only a variable pointing to that node.
 * 
 * The input could, for example, be the variable b below:
 * 
 * 	class LinkedListNode {
 * 		constructor(value) {
 * 			this.value = value;
 * 			this.next = null;
 * 		}
 * 	}
 * 
 * 	const a = new LinkedListNode('A');
 * 	const b = new LinkedListNode('B');
 * 	const c = new LinkedListNode('C');
 * 	
 * 	a.next = b;
 * 	b.next = c;
 * 
 * 	deleteNode(b);
 */

deleteNode = (nodeToDelete) => {

  // Get the input node's next node, the one we want to skip to
  const nextNode = nodeToDelete.next;

  if (nextNode) {

    // Replace the input node's value and pointer with the next
    // node's value and pointer. The previous node now effectively
    // skips over the input node
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next  = nextNode.next;

  } else {

    // Eep, we're trying to delete the last node!
    throw new Error("Can't delete the last node with this technique!");
  }
}

module.exports = deleteNode;
