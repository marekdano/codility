import { findContinuousK } from './FindContinuousSum';

describe('findContinuousK', () => {
  it('returns array of summed number', () => {
    expect(findContinuousK([1, 3, 2, 5, 7, 2], 14)).toEqual([2, 5, 7]);
  });

  it('returns empty array if no numbers found for the defined sum', () => {
    expect(findContinuousK([1, 3, 2, 5, 7, 2], 25)).toEqual([]);
  });
});
