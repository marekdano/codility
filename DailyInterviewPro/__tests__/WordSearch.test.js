import wordSearch from '../WordSearch'

describe('WordSearch', () => {
	it('should return "true" when word exists in the matrix', () => {
		const matrix = [
			['F', 'A', 'C', 'I'],
			['O', 'B', 'Q', 'P'],
			['A', 'N', 'O', 'B'],
			['M', 'A', 'S', 'S']]

		expect(wordSearch(matrix, 'FOAM')).toBeTruthy()
		expect(wordSearch(matrix, 'MASS')).toBeTruthy()
	})

	it('should return "false" when word do NOT exist in the matrix', () => {
		const matrix = [
			['F', 'A', 'C', 'I'],
			['O', 'B', 'Q', 'P'],
			['A', 'N', 'O', 'B'],
			['M', 'A', 'S', 'S']]

		expect(wordSearch(matrix, 'FACE')).toBeFalsy()
	})

	it('should return "false" when word is longer than the matrix', () => {
		const matrix = [
			['F', 'A', 'C', 'I'],
			['O', 'B', 'Q', 'P'],
			['A', 'N', 'O', 'B'],
			['M', 'A', 'S', 'S']]

		expect(wordSearch(matrix, 'FACING')).toBeFalsy()
	})
})