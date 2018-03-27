// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const arr = [root, "last"];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "last") {
      counters.push(0);
      arr.push("last");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

// traverseBF(fn) {
// 	const arr = [this.root];
// 	while (arr.length) {
// 		const node = arr.shift();

// 		arr.push(...node.children);
// 		fn(node);
// 	}
// }

module.exports = levelWidth;
