/**
 * This problem was recently asked by Twitter. 
 * You are given the root of a binary tree. 
 * Invert the binary tree in place. 
 * That is, all left children should become right children, 
 * and all right children should become left children.
 * 
 * Example:
 * 
 * 		 	 a
 * 			/ \
 * 		 b   c
 * 		/ \  /
 *   d   e f
 * 
 * The inverted version of this tree is as follows:
 * 
 * 				a
 * 			 / \
 *      c   b
 *       \  / \
 *       f  e  d
 */

export class Node {
	constructor(value) {
		this.left = null
		this.right = null
		this.value = value
	}

	preorder() {
		console.log(this.value)
		if (this.left) this.left.preorder()
		if (this.right) this.right.preorder()
	}
}

export const invert = (node) => {
	return
}
