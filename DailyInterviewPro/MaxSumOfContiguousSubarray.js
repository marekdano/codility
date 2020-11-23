/**
 * This problem was recently asked by Twitter.
 * You are given an array of integers.
 * Find the maximum sum of all possible contiguous subarrays of the array.
 *
 * Example: [34, -50, 42, 14, -5, 86]
 * Given this input array, the output should be 137.
 * The contiguous subarray with the largest sum is [42, 14, -5, 86].
 *
 * Note: Your solution should run in linear time.
 */

export const maxSubarraySum = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
      s = i + 1;
    } else if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }
  }
  return { start, end, result: maxSoFar };
};
