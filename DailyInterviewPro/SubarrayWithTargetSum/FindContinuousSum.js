/**
 * This problem was recently asked by Amazon.
 * You are given an array of integers, and an integer K.
 * Return the subarray which sums to K. You can assume that a solution will always exist.
 *
 * Example: array of [1, 3, 2, 5, 7, 2] with k (sum number) of 14 will return [2, 5, 7]
 */

export const findContinuousK = (arr, k) => {
  let currentSum = arr[0];
  let start = 0;
  let i = 1;

  while (i <= arr.length) {
    while (currentSum > k && start < i - 1) {
      currentSum -= arr[start++];
    }

    if (currentSum === k) {
      return arr.slice(start, i);
    }

    if (i < arr.length) {
      currentSum += arr[i];
    }

    i++;
  }

  return [];
};
