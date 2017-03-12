
let brackets = (str) => {
  let bracketsStack = [], curr, last;

  for(let i = 0; i < str.length; i++) {
    curr = str[i];
    if(curr === '(' || curr === '{' || curr === '[') {
      bracketsStack.push(curr)
    } else {
      last = bracketsStack.pop();
      if(!(curr === ')' && last === '(' || curr === '}' && last === '{' || curr === ']' && last === '[')) {
        return 0;
      }
    }
  }
  return bracketsStack.length === 0 ? 1 : 0;
}

module.exports = brackets;