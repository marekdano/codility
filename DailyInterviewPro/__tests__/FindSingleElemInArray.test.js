import { findSingleElemInArray } from '../FindSingleElemInArray'

describe('findSingleElemInArray', () => {
	it('should return single element in array of duplicates', () => {
		const arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
		expect(findSingleElemInArray(arr)).toBe(7)
	})
	it('should return zero when all elements are duplicates in the array', () => {
		const arr = [7, 3, 5, 5, 4, 3, 4, 8, 8, 7]
		expect(findSingleElemInArray(arr)).toBe(0)
	})
})