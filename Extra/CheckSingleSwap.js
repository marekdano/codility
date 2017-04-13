
/**
 * Task
 * 
 * You can perform a single swap operation in array A. This operation
 * takes two indices I and J, such that 0 <= I <= J <= N, and exchanges 
 * the values of A[I] and A[J].
 * 
 * The goal is to check whether array A can be sorted into non-decreasing
 * order by performing at most one swap operation.
 * 
 * For example, consider array A such that:
 * 	 A[0] = 1
 * 	 A[1] = 5
 * 	 A[2] = 3
 * 	 A[3] = 3
 *   A[4] = 7
 * 
 * After exchanging the values A[1] and A[3] we obtain 
 * an array [1, 3, 3, 5, 7], which is sorted in non-decreasing order.
 * 
 * Write a function that, given a non-empty zero-indexed array A consisting 
 * of N integers, returns TRUE if the array can be sorted into non-decreasing
 * order by performing at most one swap operation or FALSE otherwise.
 * 
 * For example, given:
 * 	 A[0] = 1
 * 	 A[1] = 5
 * 	 A[2] = 3
 * 	 A[3] = 3
 *   A[4] = 7
 * the function should return TRUE, as explained above.
 * 
 * On the other hand, for the following array:
 *   A[0] = 1
 * 	 A[1] = 3
 * 	 A[2] = 5
 * 	 A[3] = 3
 *   A[4] = 4
 * the function should return FALSE, as there is no single swap 
 * operation that sorts the array.
 * 
 * For the following array:
 *   A[0] = 1
 * 	 A[1] = 3
 * 	 A[2] = 5
 * the function should return TRUE, as the given array is already sorted.
 * 
 * Assume that:
 * 		N is an integer within the range [1..100]
 * 		each element of array A is an integer within the range
 * 		[1..1,000,000,000]
 *
 * In your solution, focus on correctness. The performance of your solution
 * will not be the focus of the assessment.  
 * 		
 * @param array A 
 */

let checkSingleSwap = (A) => {

	// 1.solution with O(nlogn)
  let count = 0;
  const B = [...A]; 
  B.sort((a, b) => a - b);  

  for(let i = 0; i < A.length; i++) {
  	if(A[i] != B[i]) count++;
  }

  return (count > 2) ? false : true;


	// // 2.solution with O(n)
  // let firstIndex, highValue, lowValue, secondIndex;
	// for(let i = 0; i < A.length - 1; i++) {
	// 	if(A[i] > A[i+1] && !firstIndex) {
	// 		highValue = A[i];
	// 		firstIndex = i;
	// 	}
	// }

  // if(firstIndex) {
	// 	let secondIndex = firstIndex + 1;
	// 	let lowValue = A[firstIndex + 1]
	// 	for(let i = firstIndex + 1; i < A.length - 1; i++) {
	// 		if(lowValue >= A[i]) {
	// 			lowValue = A[i];
	// 			secondIndex = i;
	// 		}
	// 	}

	// 	if(firstIndex < secondIndex) {
	// 		[ A[firstIndex], A[secondIndex] ] = [ A[secondIndex], A[firstIndex] ];
	// 	}
	// }

	// for(let i = 0; i < A.length - 2; i++) {
	// 	if(A[i] > A[i+1]) {
	// 		return false;
	// 	}
	// }
	// return true;
}

module.exports = checkSingleSwap;