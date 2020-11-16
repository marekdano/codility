import { Node, invert } from '../InvertBinaryTree'

describe('invert', () => {
	it('should invert a binary tree', () => {
		const root = new Node('a') 
		root.left = new Node('b') 
		root.right = new Node('c') 
		root.left.left = new Node('d') 
		root.left.right = new Node('e') 
		root.right.left = new Node('f') 

		invert(root)
		
		expect(root.left.value).toBe('c')
		expect(root.right.value).toBe('b')
		expect(root.left.right.value).toBe('f')
		expect(root.right.left.value).toBe('e')
		expect(root.right.right.value).toBe('d')
	})
})