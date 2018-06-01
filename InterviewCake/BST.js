/**
 * Write a function to check that a binary tree
 * is a valid binary search tree.
 */

const isBinarySearchTree = treeRoot => {
  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  var nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: -Infinity,
    upperBound: Infinity
  });

  // depth-first traversal
  while (nodeAndBoundsStack.length) {
    var nodeAndBounds = nodeAndBoundsStack.pop();
    var node = nodeAndBounds.node,
      lowerBound = nodeAndBounds.lowerBound,
      upperBound = nodeAndBounds.upperBound;

    // if this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      // this node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value
      });
    }
    if (node.right) {
      // this node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound
      });
    }
  }

  // if none of the nodes were invalid, return true
  // (at this point we have checked all nodes)
  return true;
};

// second solution
//const isBinarySearchTree = (treeRoot, lowerBound, upperBound) => {
// 	lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
// 	upperBound = (typeof upperBound !== 'undefined') ? upperBound :  Infinity;

// 	if (!treeRoot) return true;

// 	if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
// 			return false;
// 	}

// 	return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
// 				 isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);

// }

module.exports = isBinarySearchTree;
