/**
 * This problem was recently asked by Amazon. 
 * You are given a 2D array of characters, and a target string. 
 * Return whether or not the word target word exists in the matrix. 
 * Unlike a standard word search, the word must be either going left-to-right, 
 * or top-to-bottom in the matrix. 
*/

const wordSearch = (matrix, word) => {
	const search = (matrix, row, col, word) => {
		// if first character of word doesn't match 
    // with given starting point in grid. 
    if (matrix[row][col] !== word[0]) { 
			return false; 
		}

		const wordLength = word.length
		let k

		for (k = 1; k < wordLength; k++) {
			for (let r = row; r < matrix[0].length; r++) {
				// if the letter in next row is not next letter in the word 
				if (matrix[r][col] !== word[k]) {
					break
				}
			} 

			for (let c = col; c < matrix.length; c++) {
				// if the letter in next column is not next letter in the word 
				if (matrix[row][c] !== word[k]) {
					break
				}
			} 
		}

		if (k === wordLength) {
			return true
		}
		return false
	}

	const rowLength = matrix[0].length
	const colLength = matrix.length
	const wordLength = word.length
	let result = false

	

	if (rowLength < wordLength || colLength < wordLength) {
		return result
	}

	

	for (let row = 0; row < rowLength; row++) {
		for (let col = 0; col < colLength; col++) {
			if (search(matrix, row, col, word)) {
				console.log('HERE')
				result = true
				break
			}
		}
	}
	return result
}

export default wordSearch