/**
 * This problem was recently asked by Facebook.
 * Given a file path with folder names, '..' (Parent directory), and '.' (Current directory),
 * return the shortest possible file path (Eliminate all the '..' and '.').
 *
 * Example:
 * 		Input: '/Users/Joma/Documents/../Desktop/./../'
 * 		Output: '/Users/Joma/'
 */

export const shortestPath = (path) => {
  if (!['..', '.'].some((s) => path.includes(s))) {
    return path;
  }

  const dirs = path.split('/').filter((current) => current !== '.');
  let pointer = 0;

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === '..') {
      pointer -= 2;
    } else {
      pointer += 1;
    }
  }

  if (pointer === -1) return 'Misleading path';

  return [...dirs.slice(0, pointer + 1), ''].join('/');
};
