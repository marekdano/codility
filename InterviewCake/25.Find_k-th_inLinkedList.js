// Problem
/**
 * You have a linked list and want to find the k-th to last node.
 * Write a function kthToLastNode() that takes an integer k and the headNode of a singly-linked list, 
 * and returns the k-th to last node in the list.
 
 Example:

	function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

	var a = new LinkedListNode("Angel Food");
	var b = new LinkedListNode("Bundt");
	var c = new LinkedListNode("Cheese");
	var d = new LinkedListNode("Devil's Food");
	var e = new LinkedListNode("Eccles");

	a.next = b;
	b.next = c;
	c.next = d;
	d.next = e;

	kthToLastNode(2, a); // returns the node with value "Devil's Food" (the 2nd to last node)
 */

module.exports = {
  LinkedListNode: function(value) {
    this.value = value;
    this.next = null;
  },

  kthToLastNode: function(k, head) {
    if (k < 1) {
      throw new Error("Impossible to find less than first to last node: " + k);
    }

    // STEP 1: get the length of the list
    // start at 1, not 0
    // else we'd fail to count the head node!
    let listLength = 1;
    let currentNode = head;

    // traverse the whole list,
    // counting all the nodes
    while (currentNode.next) {
      currentNode = currentNode.next;
      listLength += 1;
    }

    // if k is greater than the length of the list, there can't
    // be a kth-to-last node, so we'll return an error!
    if (k > listLength) {
      throw new Error("k is larger than the length of the linked list: " + k);
    }

    // STEP 2: walk to the target node
    // calculate how far to go, from the head,
    // to get to the kth to last node
    const howFarToGo = listLength - k;

    currentNode = head;
    for (var i = 0; i < howFarToGo; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
};
