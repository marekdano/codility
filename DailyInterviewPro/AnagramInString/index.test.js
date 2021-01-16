import { findAnagrams } from './index';

describe('findAnagrams', () => {
  it('returns indexes in string where substring is an anagram', () => {
    expect(findAnagrams('acdbacdacb', 'abc')).toEq([3, 7]);
  });
});
