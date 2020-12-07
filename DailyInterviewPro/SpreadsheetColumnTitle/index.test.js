import { convertToTitle } from './index';

describe('convertToTitle', () => {
  it('returns the title represented by capital letters', () => {
    expect(convertToTitle(1)).toBe('A');
    expect(convertToTitle(28)).toBe('AB');
    expect(convertToTitle(702)).toBe('ZZ');
    expect(convertToTitle(704)).toBe('AAB');
    expect(convertToTitle(456976)).toBe('YYYZ');
  });
});
