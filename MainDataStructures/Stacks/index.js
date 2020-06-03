/**
 * A stack is a “last-in-first-out” data structure which means that the newest element 
 * (or the element which was added last) in the stack will be the first one removed.
 * 
 * Stack methods:
 * pop(): Removes the top item from the stack
 * push(item): Adds an item to the top of the stack
 * peek(): Returns the item at the top of the stack (but does not remove it)
 * isEmpty(): Returns true if the stack is empty
 * get length(): Returns the number of items in the stack
 * 
 */

export class Stack {
	constructor() {
		this.stack = [];
	}

	get length() {
		return this.stack.length;
	}

	pop() {
		return this.stack.pop();
	}

	push(item) {
		return this.stack.push(item);
	}

	peek() {
		return this.stack[this.stack.length-1];
	}

	isEmpty() {
		return this.length === 0; 
	}
}
