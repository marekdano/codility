/**
 * Write a function to find the 2nd largest element in a binary search tree.
 *
 * Here's a sample binary tree node class in ES6:
 *
 * class BinaryTreeNode {
 * 		constructor(value) {
 * 			this.value = value;
 * 			this.left = null;
 * 			this.right = null;
 * 		}
 *
 * 		insertLeft(value) {
 * 			this.left = new BinaryTreeNode(value);
 *  		return this.left;
 * 		}
 *
 * 		insertRight(value) {
 * 			this.right = new BinaryTreeNode(value);
 *   		return this.right;
 * 		}
 * }
 *
 * in ES5:
 *
 *	function BinaryTreeNode(value) {
 *   	this.value = value;
 *   	this.left  = null;
 *   	this.right = null;
 *	}
 *
 *  BinaryTreeNode.prototype.insertLeft = function(value) {
 *  	this.left = new BinaryTreeNode(value);
 *   	return this.left;
 *   };
 *
 *  BinaryTreeNode.prototype.insertRight = function(value) {
 *    this.right = new BinaryTreeNode(value);
 *    return this.right;
 *  };
 *
 */

let findLargest1 = function(rootNode) {
  if (!rootNode) {
    throw new Error("Tree must have at least 1 node");
  }
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
};

// or another solution
let findLargest = function(rootNode) {
  var current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
};

let findSecondLargestElem = function(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error("Tree must have at least 2 nodes");
  }

  var current = rootNode;

  while (current) {
    // case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
};

module.exports = findSecondLargestElem;
