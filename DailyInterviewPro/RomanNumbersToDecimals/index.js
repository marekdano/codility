/**
 * This problem was recently asked by Twitter:
 * Given a Roman numeral, find the corresponding decimal value. Inputs will be between 1 and 3999.
 *
 * Example:
 * 		Input: IX 		Output: 9
 * 		Input: VII		Output: 7
 * 		Input: MCMIV	Output: 1904
 *
 * Roman numerals are based on the following symbols:
 * 	I     1
 * 	IV    4
 * 	V     5
 * 	IX    9
 * 	X     10
 * 	XL    40
 * 	L     50
 * 	XC    90
 * 	C     100
 * 	CD    400
 * 	D     500
 * 	CM    900
 * 	M     1000
 *
 * Numbers are strings of these symbols in descending order.
 * In some cases, subtractive notation is used to avoid repeated characters.
 * The rules are as follows:
 *
 * 	1.) I placed before V or X is one less, so 4 = IV (one less than 5), and 9 is IX (one less than 10)
 * 	2.) X placed before L or C indicates ten less, so 40 is XL (10 less than 50) and 90 is XC (10 less than 100).
 * 	3.) C placed before D or M indicates 100 less, so 400 is CD (100 less than 500), and 900 is CM (100 less than 1000).
 *
 * NOTE: Expect the roman number is valid
 */

const mapToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInt = (roman) => {
  let result = 0;
  const lastIndex = roman.length - 1;
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === 'I' && (roman[i + 1] === 'V' || roman[i + 1] === 'X')) {
      result -= 1;
    } else if (roman[i] === 'X' && (roman[i + 1] === 'L' || roman[i + 1] === 'C')) {
      result -= 10;
    } else if (roman[i] === 'C' && (roman[i + 1] === 'D' || roman[i + 1] === 'M')) {
      result -= 100;
    } else {
      result += mapToInt[roman[i]];
    }
  }
  return result;
};
