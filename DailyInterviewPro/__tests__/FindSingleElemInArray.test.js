import { findSingleElemInArray } from '../FindSingleElemInArray'

describe('findSingleElemInArray', () => {
	it('should return single element in array of duplicates', () => {
		const arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
		expect(findSingleElemInArray(arr)).toBe(7)
	})
})