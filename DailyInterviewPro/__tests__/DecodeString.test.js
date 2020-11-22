import { decode } from '../DecodeString';

describe('decode', () => {
  it('should return decoded string', () => {
    expect(decode('3[abc]')).toBe('abcabcabc');
    expect(decode('2[a2[b]c]')).toBe('abbcabbc');
    expect(decode('3[a]2[bc]')).toBe('aaabcbc');
    expect(decode('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
  });
});
