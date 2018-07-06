/**
 * Write a recursive function for generating all permutations of an input string. 
 * Return them as a set. 
 * 
 * Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
 * 
 * To start, assume every character in the input string is unique.
 * 
 * Your function can have loops—it just needs to also be recursive.
 */

const getPermutations = (string) => {
	// base case
	if (string.length <= 1) {
		return new Set(string);
	}

	const allCharsExceptLast = string.slice(0, -1);
	const lastChar = string[string.length - 1];

	// recursive call: get all possible permutations for all chars except last
	const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

	// put the last char in all possible positions for each of the above permutations
	const permutations = new Set();
	permutationsOfAllCharsExceptLast.forEach((permutationOfAllCharsExceptLast) => {
		for (let position = 0; position <= allCharsExceptLast.length; position++) {
			const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
			permutations.add(permutation);
		}
	});

	return permutations;
};

module.exports = getPermutations;