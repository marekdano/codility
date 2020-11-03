import { MaxStack } from '../MaxInStack'

describe('MaxStack', () => {
	it('should return "null" when stack is empty', () => {
		const stack = new MaxStack()
		expect(stack.max()).toBe(null)

		stack.push(1)
		stack.push(2)
		stack.pop()
		stack.pop()
		expect(stack.max()).toBe(null)
	})

	it('should return max (3 and 2) when stack is NOT empty', () => {
		const stack = new MaxStack()
		stack.push(1)
		stack.push(2)
		stack.push(3)
		stack.push(2)
		expect(stack.max()).toBe(3)
		stack.pop()
		stack.pop()
		expect(stack.max()).toBe(2)
		stack.pop()
		stack.pop()
		expect(stack.max()).toBe(null)
	})

	it('should return min (1 and 2) when stack is NOT empty', () => {
		const stack = new MaxStack()
		stack.push(2)
		stack.push(3)
		stack.push(1)
		stack.push(2)
		expect(stack.min()).toBe(1)
		stack.pop()
		stack.pop()
		expect(stack.min()).toBe(2)
		stack.pop()
		stack.pop()
		expect(stack.min()).toBe(null)
	})
})