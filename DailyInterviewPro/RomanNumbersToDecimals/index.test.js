import { romanToInt } from './index';

describe('romanToInt', () => {
  it('returns converted roman number to decimal', () => {
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('VII')).toBe(7);
    expect(romanToInt('MCDIV')).toBe(1404);
    expect(romanToInt('MCMXCIX')).toBe(1999);
  });
});
