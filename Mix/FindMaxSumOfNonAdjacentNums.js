/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
 * Numbers can be 0 or negative.
 * 
 * For example, 
 * [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 
 * [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * 
 * Follow-up: Can you do this in O(N) time and constant space?
 * 
 * 
 * One of the SOLUTION:
 * Loop for all elements in arr[] and maintain two sums incl and excl 
 * where incl = Max sum including the previous element 
 * and excl = Max sum excluding the previous element.
 * 
 * Max sum excluding the current element will be max(incl, excl) 
 * and max sum including the current element will be excl + current element 
 * (Note that only excl is considered because elements cannot be adjacent).
 * 
 * At the end of the loop return max of incl and excl.
 * 
 * reference:
 * https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/
 * 
 */

const findMaxSum = (arr) => {
  let incl = arr[0];
  let excl = 0;
  
  for (let i = 1; i < arr.length; i++) {
    const temp = incl;
    incl = Math.max(incl, excl + arr[i]);
    excl = temp;
  }
  return incl;
} 

module.exports = findMaxSum;