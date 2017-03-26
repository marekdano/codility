
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