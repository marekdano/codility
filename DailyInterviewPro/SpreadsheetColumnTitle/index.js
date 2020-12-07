/**
 * This problem was recently asked by Amazon.
 * MS Excel column titles have the following pattern:
 * A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc.
 * In other words, column 1 is named "A", column 2 is "B", column 26 is "Z",
 * column 27 is "AA" and so forth. Given a positive integer, find its corresponding column name.
 *
 * Example:
 * 		26 => Z
 *		51 => AY
 *		52 => AZ
 *		676 => YZ
 *		702 => ZZ
 *		704 => AAB
 */

export const convertToTitle = (columnNumber) => {
  let columnName = '';
  const CHAR_CODE_INDEX = 64;

  while (columnNumber > 0) {
    const rem = columnNumber % 26;

    if (rem === 0) {
      columnName += 'Z';
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnName += String.fromCharCode(rem + CHAR_CODE_INDEX);
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  return columnName.split('').reverse().join('');
};
