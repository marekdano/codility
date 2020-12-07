import { compareVersions } from './index';

describe('compareVersions', () => {
  it('returns "1" when first version is the latest', () => {
    expect(compareVersions('1.0.33', '1.0.27')).toBe(1);
  });

  it('returns "-1" when second version is the latest', () => {
    expect(compareVersions('0.1', '1.1')).toBe(-1);
  });

  it('returns "0" when versions are the same', () => {
    expect(compareVersions('1.01', '1.001')).toBe(0);
    expect(compareVersions('1.0', '1.0.0')).toBe(0);
  });
});
