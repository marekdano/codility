/**
 * This problem was recently asked by Apple.
 *
 * You are given an array. Each element represents
 * the price of a stock on that particular day.
 * Calculate and return the maximum profit
 * you can make from buying and selling that stock only once.
 *
 * For example: [9, 11, 8, 5, 7, 10]
 * Here, the optimal trade is to buy when the price is 5,
 * and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).
 */

export const buyAndSell = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let max = 0;
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);

    max = Math.max(max, nums[i] - min);
  }
  return max;
};
