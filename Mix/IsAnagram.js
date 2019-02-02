/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * 
 * Example 1: s = "anagram", t = "nagaram" => return true
 * Example 2: s = "rat", t = "car" => return false
 * 
 */
// Complexity Time O(n log n), Space (1)

const isAnagram = (s, t) => {
	const listS = s.split('');
	const listT = t.split('');
	if (listS.length !== listT.length) {
		return false;
	}

	return listS.sort().join('') === listT.sort().join('');
}
module.exports = isAnagram;
