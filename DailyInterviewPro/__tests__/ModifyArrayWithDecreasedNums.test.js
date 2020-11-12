import { check } from '../ModifyArrayWithDecreasedNums'

describe('Array check', () => {
	test('should returns true when replacing a single item decreases item numbers in array', () => {
		const arr = [13, 4, 7]
		expect(check(arr)).toBeTruthy()
	})
	
	test('should return false when none or more than a single number in array has to be replace', () => {
		const arr = [4, 1, 2, 3, 5]
		expect(check(arr)).toBeFalsy()
	})
})
