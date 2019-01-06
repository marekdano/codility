/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:
 * 	A -> 1
 *  B -> 2
 *  C -> 3
 *  ...
 *  Z -> 26
 *  AA -> 27 
 *  AB -> 28 
 * ...
 * 
 *  Examples:
 * 		"A" -> 1
 * 		"AB" -> 28
 * 		"ZY" -> 701
 */

const titleToNumber = (title) => {
	return title.split('').reverse().reduce((total, curr, index) => {
		return total + (curr.charCodeAt() - 64) * Math.pow(26, index);
	}, 0);
};

module.exports = titleToNumber;
