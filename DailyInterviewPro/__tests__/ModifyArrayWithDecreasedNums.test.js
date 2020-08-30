import { check } from '../ModifyArrayWithDecreasedNums'

describe('Array check', () => {
	test('should returns true when replacing a single item decreases item numbers in array', () => {
		const arr = [13, 4, 7]
		expect(arr).toBeTruthy()
	})
	
	test('should return false when none or more than a single number in array has to be replace', () => {
		const arr = [5, 1, 3, 2, 5]
		expect(arr).toBeFalsy()
	})
})
