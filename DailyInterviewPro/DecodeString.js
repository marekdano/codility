/**
 * This problem was recently asked by Google.
 * Given a string with a certain rule: k[string] should be expanded to string k times.
 * So for example, 3[abc] should be expanded to abcabcabc.
 * Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.
 */

const isNumber = (char) => +char >= 0 && +char <= 9;

export const decode = (str) => {
  const integerStack = [];
  const stringStack = [];
  let temp = '';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let count = 0;

    if (isNumber(str[i])) {
      while (isNumber(str[i])) {
        count = count * 10 + +str[i] - '0';
        i++;
      }

      i--;
      integerStack.push(count);
    } else if (str[i] === '[') {
      if (isNumber(str[i - 1])) {
        stringStack.push(str[i]);
      } else {
        stringStack.push(str[i]);
        integerStack.push(1);
      }
    } else if (str[i] === ']') {
      temp = '';
      count = 0;

      if (integerStack.length > 0) {
        count = integerStack.pop();
      }
      while (stringStack.length > 0 && stringStack[stringStack.length - 1] !== '[') {
        temp = stringStack.pop() + temp;
      }
      if (stringStack.length > 0 && stringStack[stringStack.length - 1] === '[') {
        stringStack.pop();
      }

      result = temp.repeat(count);

      for (let j = 0; j < result.length; j++) {
        stringStack.push(result[j]);
      }

      result = '';
    } else {
      stringStack.push(str[i]);
    }
  }

  while (stringStack.length > 0) {
    result = stringStack.pop() + result;
  }

  return result;
};
