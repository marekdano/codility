/**
 * Find a duplicate
 * 
 * We have an array of integers, where:
 * 		The integers are in the range 1..n
 * 		The array has a length of n+1n+1
 * 
 * It follows that our array has at least one integer which appears at least twice. 
 * But it may have several duplicates, and each duplicate may appear more than twice.
 * 
 * Write a function which finds an integer that appears more than once in our array. 
 * (If there are multiple duplicates, you only need to find one of them.)
 * 
 * We need to optimize the solution for space!
 */

// SOLUTION should be O(n lg n) time and O(1) space.

const findDuplicate = (theArray) => {

	let floor = 1;
	let ceiling = theArray.length - 1;

	while (floor < ceiling) {

		// divide our range 1..n into an upper range and lower range
		// (such that they don't overlap)
		// lower range is floor..midpoint
		// upper range is midpoint+1..ceiling
		const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
		const lowerRangeFloor   = floor;
		const lowerRangeCeiling = midpoint;
		const upperRangeFloor   = midpoint + 1;
		const upperRangeCeiling = ceiling;

		const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

		// count number of items in lower range
		const itemsInLowerRange = 0;
		theArray.forEach(function(item) {
			// is it in the lower range?
			if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
				itemsInLowerRange += 1;
			}
		});

		if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

			// there must be a duplicate in the lower range
			// so use the same approach iteratively on that range
			floor   = lowerRangeFloor;
			ceiling = lowerRangeCeiling;
		} else {

			// there must be a duplicate in the upper range
			// so use the same approach iteratively on that range
			floor   = upperRangeFloor;
			ceiling = upperRangeCeiling;
		}
	}

	// floor and ceiling have converged
	// we found a number that repeats!
	return floor;
}

module.exports = findDuplicate;
