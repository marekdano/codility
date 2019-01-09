/**
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 * 
 * Examples:
 * 		s = "leetcode", return 0
 * 		s = "loveleetcode", return 2
 * 		s = "tratra", return -1
 * 
 * Note: You may assume the string contain only lowercase letters. 
 */

const firstUniqChar = (str) => {
	const freq = new Map();

	[...str].forEach((char) => {
		freq.set(char, freq.get(char)+1 || 1);
	});

	// find the index
	for (let i = 0; i < str.length; i++) {
		if (freq.get(str.charAt(i)) === 1) 
			return i;
	}
	return -1;
};

module.exports = firstUniqChar;