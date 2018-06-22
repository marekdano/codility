/**
 * Write an efficient function that checks whether any permutation of an input string is a palindrome. 
 * You can assume the input string only contains lowercase letters.
 * 
 * Examples:
 * 
 * "civic" should return true
 * "ivicc" should return true
 * "civil" should return false
 * "livci" should return false
 * "But 'ivicc' isn't a palindrome!"
 * 
 * NOTE:
 * If you had this thought, read the question again carefully. 
 * We're asking if any permutation of the string is a palindrome. 
 * Spend some extra time ensuring you fully understand the question before starting. 
 * Jumping in with a flawed understanding of the problem doesn't look good in an interview.
 */

const palindrome = (str) => {
	// track characters we've seen an odd number of times
	const unpairedCharacters = new Set();

	for (let i = 0; i < str.length; i++) {
			const char = str[i];

			if (unpairedCharacters.has(char)) {
					unpairedCharacters.delete(char);
			} else {
					unpairedCharacters.add(char);
			}
	}

	// the string has a palindrome permutation if it
	// has one or zero characters without a pair
	return unpairedCharacters.size <= 1;
};

module.exports = palindrome;