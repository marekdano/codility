/**
 * This problem was recently asked by Amazon. 
 * You are given a 2D array of characters, and a target string. 
 * Return whether or not the word target word exists in the matrix. 
 * Unlike a standard word search, the word must be either going left-to-right, 
 * or top-to-bottom in the matrix. 
*/

const wordSearch = (matrix, word) => {
	const search = (matrix, word, row, col) => {
		const len = word.length
		let str = ''
		
		if (matrix[row][col] !== word[0]) {
			return false
		}

		// check horizontally
		for (let c = col; c < matrix[0].length; c++) {
			str += matrix[row][c]
		}

		if (str.includes(word)) return true
		
		str = ''
		// check vertically
		for (let r = row; r < matrix.length; r++) {
			str += matrix[r][col]
		}

		if (str.includes(word)) return true
		
		return false
	}

	const rowLength = matrix.length
	const colLength = matrix[0].length
	const wordLength = word.length
	let result = false

	if (rowLength < wordLength || colLength < wordLength) {
		return result
	}

	for (let row = 0; row < rowLength; row++) {
		for (let col = 0; col < colLength; col++) {
			if (search(matrix, word, row, col)) {
				result = true
				break
			}
		}
	}
	return result
}

export default wordSearch