/**
 * Write a function for doing an in-place shuffle of an array.
 * 
 * The shuffle must be "uniform," meaning each item in the original array 
 * must have the same probability of ending up in each spot in the final array.
 * 
 * Assume that you have a function getRandom(floor, ceiling) 
 * for getting a random integer that is >= floor and <= ceiling.
 */

// Complexity 
// O(n) time and O(1) space

const getRandom = (floor, ceiling) => {
	return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const shuffle = (array) => {
	// if it's 1 or 0 items, just return
	if (array.length <= 1) return;

	// walk through from beginning to end
	for (var indexWeAreChoosingFor = 0;
		indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {

		// choose a random not-yet-placed item to place there
		// (could also be the item currently in that spot)
		// must be an item AFTER the current item, because the stuff
		// before has all already been placed
		var randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

		// place our random choice in the spot by swapping
		if (randomChoiceIndex !== indexWeAreChoosingFor) {
			var valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
			array[indexWeAreChoosingFor] = array[randomChoiceIndex];
			array[randomChoiceIndex] = valueAtIndexWeChoseFor;
			
			// ES6
			// [ array[indexWeAreChoosingFor], array[randomChoiceIndex] ] = [ array[randomChoiceIndex], array[indexWeAreChoosingFor] ];
		}
	}
};

module.exports = shuffle;
