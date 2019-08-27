/**
 * Given a strin, replace each its character by the next one in the English alphabet ("z" vould be replaced by "a"). 
 * The input string should contain alphabet characters only.
 * 
 * Example:
 * 
 *    input: "crazy"
 *    output: "dsbaz"
 */

const alphabeticShift = (str = '') => {
  if (!str.length) {
    return ''
  }
  if (!/^[A-Za-z]+$/i.test(str)) {
    throw new SyntaxError('The input string contains oher character then alphbetic ones.')
  }

  return [...str].map(letter => {
    const asciiNum = letter.charCodeAt(0)
    return asciiNum === 90 ? 'A' : asciiNum === 122 ? 'a' : String.fromCharCode(asciiNum + 1)
  }).join('')
};

module.exports = alphabeticShift;