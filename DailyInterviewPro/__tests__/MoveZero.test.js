import { moveZeros } from '../MoveZeros'

describe('moveZero', () => {
	it('should return array when all zeros are at the end of the array', () => {
		expect(moveZeros([0,1,0,3,12])).toEqual([1,3,12,0,0])
		expect(moveZeros([1,0,0,3,12])).toEqual([1,3,12,0,0])
		expect(moveZeros([0,0,3,12,1])).toEqual([3,12,1,0,0])
		expect(moveZeros([1,0,3,12,0])).toEqual([1,3,12,0,0])
	})
})