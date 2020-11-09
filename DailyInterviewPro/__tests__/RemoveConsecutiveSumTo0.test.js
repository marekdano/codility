import { Node, removeConsecutiveSumTo0 } from '../RemoveConsecutiveSumTo0'

const printValueFromList = (head) => {
	let result = ''
	let node = head

	if (!node) {
		return result
	}

	while (node) {
		result = `${result} ${node.value}`
		node = node.next
	}
	return result.trim()
}

describe('removeConsecutiveSumTo0', () => {
	it('should return "10"', () => {
		const head = new Node(10)
		head.next = new Node(5)
		head.next.next = new Node(-3)
		head.next.next.next = new Node(-3)
		head.next.next.next.next = new Node(1)
		head.next.next.next.next.next = new Node(4)
		head.next.next.next.next.next.next = new Node(-4)

		const resultList = removeConsecutiveSumTo0(head)
		expect(printValueFromList(resultList)).toBe('10')
	})

	it('should return "3 1"', () => {
		const head = new Node(1)
		head.next = new Node(2)
		head.next.next = new Node(-3)
		head.next.next.next = new Node(3)
		head.next.next.next.next = new Node(1)

		const resultList = removeConsecutiveSumTo0(head)
		expect(printValueFromList(resultList)).toBe('3 1')
	})

	it('should return empty string', () => {
		const head = new Node(1)
		head.next = new Node(2)
		head.next.next = new Node(-3)
		head.next.next.next = new Node(3)
		head.next.next.next.next = new Node(-2)
		head.next.next.next.next.next = new Node(-1)

		const resultList = removeConsecutiveSumTo0(head)
		expect(printValueFromList(resultList)).toBe('')
	})

	it('should return "1 2 4"', () => {
		const head = new Node(1)
		head.next = new Node(2)
		head.next.next = new Node(3)
		head.next.next.next = new Node(-3)
		head.next.next.next.next = new Node(4)

		const resultList = removeConsecutiveSumTo0(head)
		expect(printValueFromList(resultList)).toBe('1 2 4')
	})
})