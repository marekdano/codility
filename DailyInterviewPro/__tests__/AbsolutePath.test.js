import { shortestPath } from '../AbsolutePath';

describe('shortestPath', () => {
  it('returns the shortest path', () => {
    expect(shortestPath('/Users/Joma/Documents/../Desktop/./../')).toBe('/Users/Joma/');
    expect(shortestPath('/Users/Joma/Documents/../../')).toBe('/Users/');
    expect(shortestPath('/Users/Joma/../../')).toBe('/');
  });

  it('returns the same path when no ".." or "." defines in the path', () => {
    expect(shortestPath('/Users/Joma/Documents/')).toBe('/Users/Joma/Documents/');
  });

  it('returns error message when the path is defined incorrectly', () => {
    expect(shortestPath('/Users/Joma/Documents/../../../')).toBe('Misleading path');
  });
});
