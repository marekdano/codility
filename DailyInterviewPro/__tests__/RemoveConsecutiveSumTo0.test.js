import { Node, removeConsecutiveSumTo0 } from '../RemoveConsecutiveSumTo0'

const printValueFromList = () => {
	let result = ''
	let node = head

	while (node) {
		result = `${result} ${node.value}`
		node = node.next
	}
	return result
}

describe('removeConsecutiveSumTo0', () => {
	it('should return 10', () => {
		const head = Node(10)
		head.next = Node(5)
		head.next.next = Node(-3)
		head.next.next.next = Node(-3)
		head.next.next.next.next = Node(1)
		head.next.next.next.next.next = Node(4)
		head.next.next.next.next.next.next = Node(-4)

		const resultList = removeConsecutiveSumTo0(head)
		expect(printValueFromList(resultList)).toBe('10')
	})
})