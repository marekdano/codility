
/**
 * Task
 * 
 * An integer P is a whole square if it is a square 
 * of some integer Q; i.e. if P = Q^2.
 * 
 * Write a function that, given two integers A and B, returns
 * the number of whole squares within the interval 
 * [A..B] (both ends included).
 *  
 * For example, given A = 4 and B = 17, the function should return 3,
 * because there are three squares of integers in the interval [4..17],
 * namely 4 = 2^2, 9 = 3^2 and 16 = 4^2.
 * 
 * Assume that:
 * 	 A and B are integers within the range [-2,147,483,648..2,147,483,648];
 *   A <= B.
 * 
 * Complexity:
 *   expected worst-case time complexity is O(sqrt(abs(B)));
 *   expected worst-case space complexity is O(1).
 * 
 * @param number A 
 * @param number B 
 */

const wholeSquaresInInterval = (A, B) => {
  let count = 0;
  let highestNum = 0;
  for(let i=2; i * i <= B; i++) {
    count++;
    highestNum = i;
  }
  for(let i=highestNum + 1; i * i <= Math.abs(A); i++) {
    count++;
  }
  return count;
}

module.exports = wholeSquaresInInterval;