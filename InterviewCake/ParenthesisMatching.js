/**
 * Message:
 * "Sometimes (when I nest them (my parentheticals) 
 * too much (like this (and this))) they get confusing."
 * 
 * Write a function that, given a sentence like the one above, 
 * along with the position of an opening parenthesis, 
 * finds the corresponding closing parenthesis.
 * 
 * Example: 
 * if the example string above is input with the number 10 
 * (position of the first parenthesis), 
 * the output should be 79 (position of the last parenthesis).
 */

// Complexity 
// O(n) time, where n is the number of chars in the string. O(1) space.

const getClosingParenthesis = (str, openingParenIndex) => {
	let openNestedParen = 0;

	for (let position = openingParenIndex + 1; position < str.length; position++) {
		const char = str[position];

		if (char === '(') {
			openNestedParen += 1;
		} else if (char === ')') {
			if (openNestedParen === 0) {
				return position
			} else {
				openNestedParen -= 1;
			}
		}
	}

	throw new Error('No closing parenthesis :(');
};

module.exports = getClosingParenthesis;