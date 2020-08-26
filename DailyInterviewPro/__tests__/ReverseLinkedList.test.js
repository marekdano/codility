import { ListNode, getListValues, reverseListIteratively, reverseListRecursively } from '../ReverseLinkedList'

describe('ReverseLinkedList', () => {
	it('should reverse valid linked list', () => {
		const listHead = new ListNode(4)
		const node1 = new ListNode(3)
		listHead.next = node1
		const node2 = new ListNode(2)
		node1.next = node2
		const node3 = new ListNode(1)
		node2.next = node3
		const listTail = new ListNode(0)
		node3.next = listTail

		const originalListValues = getListValues(listHead)
		const reversedList = reverseListIteratively(listHead)
		const reversedList2 = reverseListRecursively(listHead)

		expect(originalListValues).toBe('4 3 2 1 0')
		expect(getListValues(reversedList)).toBe('0 1 2 3 4')
		expect(getListValues(reversedList2)).toBe('0 1 2 3 4')
	})
})