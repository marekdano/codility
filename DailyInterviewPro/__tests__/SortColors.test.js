import { sortColors } from '../SortColors'

describe('sortColors', () => {
	it('should sort array of colors represented by 0, 1, and 2', () => {
		const nums = [2, 0, 2, 1, 1, 0]
		const sortedNums = [0, 0, 1, 1, 2, 2]
		expect(sortColors(nums)).toEqual(sortedNums)
	})

	it('should return the same array when array is empty or has a one element', () => {
		expect(sortColors([])).toEqual([])
		expect(sortColors([1])).toEqual([1])
	})
})