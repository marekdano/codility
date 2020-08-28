import { sumTwoNumbers } from '../SumTwoNumbers'

describe('sumTwoNumbers', () => {
	it('should return true when sum of two numbers exists in the array', () => {
		const numbers = [4, 7, 1 , -3, 2]
		const k = 5

		expect(sumTwoNumbers(numbers, k)).toBeTruthy()
	})

	it('should return false when sum of two numbers DO NOT exist in the array', () => {
		const numbers = [4, 7, 1 , -3, 2]
		const k = -10

		expect(sumTwoNumbers(numbers, k)).toBeFalsy()
	})
})