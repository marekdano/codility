import { largestNum } from '../MakeTheLargestNum'

describe('largestNum', () => {
	it('returns the largest number from the array of integers', () => {
		const nums = [17, 7, 2, 45, 72]
		expect(largestNum(nums)).toBe(77245217)
	})
})