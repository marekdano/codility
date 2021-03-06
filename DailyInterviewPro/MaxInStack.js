/**
 * This problem was recently asked by Twitter
 * Implement a class for a stack that supports all the regular functions (push, pop) 
 * and an additional function of max() which returns the maximum element 
 * in the stack (return null if the stack is empty). Each method should run in constant time.
 */

export class MaxStack {
	constructor() {
		this.stack = []
		this.maxValue = null
		this.minValue = null
	}

	push(item) {
		this.stack.push(item)
		if (item > this.maxValue) {
			this.maxValue = item
		}
		if (item < this.minValue || this.minValue === null ) {
			
			this.minValue = item
		}
	}

	pop() {
		const lastItem = this.stack.pop()

		if (this.stack.length < 2) {
			this.maxValue = null
			this.minValue = null
		} else {
			this.maxValue = this.stack[0]
			this.minValue = this.stack[0]
			for (let val of this.stack) {
				if (val > this.maxValue) {
					this.maxValue = val
				}
				if (val < this.maxValue) {
					this.minValue = val
				}
			}
		}
		return lastItem
	}

	max() {
		return this.maxValue
	}

	min() {
		return this.minValue
	}
}