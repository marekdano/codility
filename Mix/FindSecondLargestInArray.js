/**
 * Find the second largest number in the array of numbers
 */

function findSecondLargestNumber(arr) {
	if (arr.length === 0 || arr.length === 1) return undefined

	let largest = arr[0];
	let secondLargest = -Infinity;

	for (let i = 1; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') return undefined
		if (largest < arr[i]) {
			secondLargest = largest;
			largest = arr[i];
		}

		if (secondLargest < arr[i] && arr[i] < largest) {
			secondLargest = arr[i];
		}
	}
	return secondLargest === -Infinity ? undefined : secondLargest;
}

module.exports = findSecondLargestNumber;