import { treeSum } from '../AllTripletsWithZeroSum'

describe('treeSum', () => {
	it('returns array of triplets where sum of them is zero', () => {
		expect(treeSum([1, -2, 1, 0, 5])).toEqual([[1, -2, 1]])
		expect(treeSum([0, -1, 2, -3, 1])).toEqual([[0, -1, 1], [2, -3, 1]])
	})

	it('returns empty array when no triplets found with zero sum', () => {
		expect(treeSum([-1, -2, 5, 0, 5])).toEqual([])
	})
})