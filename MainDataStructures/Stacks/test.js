import { Stack } from ".";

describe("Stack", () => {
	let stack;
	beforeEach(() => {
		stack = new Stack()
	})

	it("should add an item (push) to the stack", () => {
		stack.push(10)
		stack.push(20)

		expect(stack.length).toBe(2);
		expect(stack.isEmpty()).toBeFalsy();
	});

	it("should remove an item (pop) to the stack", () => {
		stack.push(10);

		expect(stack.length).toBe(1);
		expect(stack.isEmpty()).toBeFalsy();
		
		stack.pop();

		expect(stack.isEmpty()).toBeTruthy();
	});

	it("should check the latest item (peek) to the stack", () => {
		stack.push(10)
		stack.push(20)

		expect(stack.length).toBe(2);
		expect(stack.peek()).toBe(20);
		expect(stack.length).toBe(2);
	});
})