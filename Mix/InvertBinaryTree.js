class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const invertBinaryTree = (tree) => {
  if (tree) {
    const left = tree.left;
    const right = tree.right;
    tree.left = right;
    tree.right = left;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
  return tree;
};

module.exports = { Node, invertBinaryTree };
