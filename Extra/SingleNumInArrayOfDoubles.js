/**
 * Given a non-empty array of integers, every element appears twice except for one. 
 * Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. 
 * Could you implement it without using extra memory?
 */

// Time complexity O(n)
// Space complexity 0(1)

let singleNumber = (arr) => arr.reduce((result, current) => result ^ current);

module.exports = singleNumber;