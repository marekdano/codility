import { permute } from '../NumberPermutations'

describe('permute', () => {
	it('returns all permutations', () => {
		const result = permute([1,2,3])
		expect(result.length).toBe(6)
		expect(result).toContainEqual([1,2,3])
		expect(result).toContainEqual([2,1,3])
		expect(result).toContainEqual([2,3,1])
		expect(result).toContainEqual([1,3,2])
		expect(result).toContainEqual([3,1,2])
		expect(result).toContainEqual([3,2,1])
	})
})