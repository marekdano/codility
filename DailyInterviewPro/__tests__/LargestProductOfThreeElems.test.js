import { maximumProductOfThree } from '../LargestProductOfThreeElems'

describe('maximumProductOfThree', () => {
	it('should return the largest product', () => {
		expect(maximumProductOfThree([-4, -4, 2, 8])).toBe(128)
		expect(maximumProductOfThree([10, -4, 1, -5, -6])).toBe(300)
		expect(maximumProductOfThree([10, -4, 1, -5, 6])).toBe(200)
	})

	it('should return 0 when there is less than three numbers in array', () => {
		expect(maximumProductOfThree([])).toBe(0)
		expect(maximumProductOfThree([-1])).toBe(0)
		expect(maximumProductOfThree([1, 2])).toBe(0)
	})
})