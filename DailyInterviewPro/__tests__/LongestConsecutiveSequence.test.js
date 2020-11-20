import { longestConsecutiveSeq } from '../LongestConsecutiveSequence'

describe('longestConsecutiveSeq', () => {
	it('returns number of the longest consecutive sequence in unsorted array', () => {
		expect(longestConsecutiveSeq([100, 4, 200, 1, 3, 2])).toBe(4)
	})
})