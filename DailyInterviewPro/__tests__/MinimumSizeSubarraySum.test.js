import { minSubArrayLen } from '../MinimumSizeSubarraySum' 

describe('minSubArrayLen', () => {
	it('should return the smallest subarray', () => {
		expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2)
		expect(minSubArrayLen([4, 3, 2, 3, 2, 1], 7)).toBe(2)
		expect(minSubArrayLen([7, 3, 1, 2, 4, 3], 7)).toBe(1)
		expect(minSubArrayLen([1, 2, 3, 4, 5], 30)).toBe(0)
	})
})