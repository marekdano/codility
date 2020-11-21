import { plusOne } from '../PlusOne'

describe('plusOne', () => {
	it('returns -1 when array do not contains all numbers', () => {
		expect(plusOne([1, '2', 3])).toBe(-1)
	})

	it('returns incremented number', () => {
		expect(plusOne([2,3,4])).toEqual([2,3,5])
		expect(plusOne([2,9,9])).toEqual([3,0,0])
		expect(plusOne([9,9,9])).toEqual([1,0,0,0])
	})
})