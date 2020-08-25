import { ListNode, addTwoNumbersAsLinkedList } from "../AddTwoNumbersAsLinkedList"

describe('addTwoNumbersAsLinkedList', () => {
	test('should return sum of other two linked lists', () => {
		const linkedList1 = new ListNode(2)
		linkedList1.next = new ListNode(4)
		linkedList1.next.next = new ListNode(3)
	
		const linkedList2 = new ListNode(5)
		linkedList2.next = new ListNode(6)
		linkedList2.next.next = new ListNode(4)
	
		const resultList = addTwoNumbersAsLinkedList(linkedList1, linkedList2)
	
		expect(resultList.value).toBe(7)
		expect(resultList.next.value).toBe(0)
		expect(resultList.next.next.value).toBe(8)
	});
})

