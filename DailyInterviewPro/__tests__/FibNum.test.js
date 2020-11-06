import { getFibNum } from '../FibNum'

describe('getFibNum', () => {
	it('should return fibonacci number', () => {
		expect(getFibNum(3)).toBe(2)
		expect(getFibNum(7)).toBe(13) 
	})
})