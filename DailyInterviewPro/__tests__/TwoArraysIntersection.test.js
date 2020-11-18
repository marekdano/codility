import { intersection } from '../TwoArraysIntersection'

describe('intersection', () => {
	it('returns intersection of two arrays', () => {
		expect(intersection([1,2,2,1], [2,2])).toEqual([2])
		expect(intersection([4,9,5], [9,4,9,8,4])).toContain(9)
		expect(intersection([4,9,5], [9,4,9,8,4])).toContain(4)
	})
})