import { buyAndSell } from '../MaxProfitFromStocks';

describe('buyAndSell', () => {
  it('returns the positive number as profit from array of nums', () => {
    expect(buyAndSell([9, 11, 8, 5, 7, 10])).toBe(5);
  });

  it('returns zero when the array is empty', () => {
    expect(buyAndSell([])).toBe(0);
  });
});
