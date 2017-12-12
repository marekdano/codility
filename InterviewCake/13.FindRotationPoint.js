// PROBLEM
/**
 * I opened up a dictionary to a page in the middle and started flipping through, 
 * looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. 
 * When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
 * Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, 
 * reach the end, and then start from the beginning of the alphabet. In other words, 
 * this is an alphabetically ordered array that has been "rotated." For example:
 * 
 * 	var words = [
 *		'ptolemaic',
 *		'retrograde',
 * 		'supplant',
 *		'undulate',
 *		'xenoepist',
 *		'asymptote',  // <-- rotates here!
 *		'babka',
 *		'banoffee',
 *		'engender',
 *		'karpatka',
 *		'othellolagkage',
 *	];
 *
 * Write a function for finding the index of the "rotation point," 
 * which is where I started working from the beginning of the dictionary. 
 * This array is huge so we want to be efficient here. 
 */

let searchPoint = (words) => {
	const firstWord = words[0]; 
	
	let floorIndex = 0;
	let ceilingIndex = words.length - 1;
	
	while (floorIndex < ceilingIndex) {
		// guess a point halfway between floor and ceiling
		let guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

		// if guess comes after first word or is the first word
		if (words[guessIndex] >= firstWord) {
			// go right
			floorIndex = guessIndex;
		} else {
			// go left
			ceilingIndex = guessIndex;
		}

		// if floor and ceiling have converged
		if (floorIndex + 1 === ceilingIndex) {
				break;
		}
	}
	return ceilingIndex;
}

// TODO: write more test cases

// test case
const words = ['k','v','a','b','c','d','e','g','i'];
												
module.exports = searchPoint;