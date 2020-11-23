import { maxSubarraySum } from '../MaxSumOfContiguousSubarray';

describe('maxSubarraySum', () => {
  it('should return the largest sum', () => {
    let result = maxSubarraySum([34, -50, 42, 14, -5, 86]).result;
    expect(result).toBe(137);
    result = maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]).result;
    expect(result).toBe(7);
  });
});
