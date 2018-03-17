/**
 * You're working with an intern that keeps coming to you with JavaScript code
 * that won't run because the braces, brackets, and parentheses are off.
 * To save you both some time, you decide to write a braces/brackets/parentheses validator.
 *
 * Let's say:
 *
 *  '(', '{', '[' are called "openers."
 *  ')', '}', ']' are called "closers."
 *  Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
 *
 * Examples:
 *
 *  "{ [ ] ( ) }" should return true
 *  "{ [ ( ] ) }" should return false
 *  "{ [ }" should return false
 */

let bracketValidator = str => {
  let bracketStack = [];
  const openersToClosers = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const openers = new Set(["{", "[", "("]);
  const closers = new Set(["}", "]", ")"]);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openers.has(char)) {
      bracketStack.push(char);
    } else if (closers.has(char)) {
      if (!bracketStack.length) {
        return false;
      } else {
        const lastOpener = bracketStack.pop();

        if (openersToClosers[lastOpener] !== char) {
          return false;
        }
      }
    }
  }
  return bracketStack.length === 0;
};

module.exports = bracketValidator;
