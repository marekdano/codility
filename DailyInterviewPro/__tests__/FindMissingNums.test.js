import { findMissingNums } from '../FindMissingNums'

describe('findMissingNums', () => {
	it('returns array of missed numbers', () => {
		expect(findMissingNums([4,5,2,6,8,2,1,5])).toEqual([3,7])
		expect(findMissingNums([4,5,2,6,8,2,5])).toEqual([1,3,7])
	})
})