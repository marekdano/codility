
let nesting = (str) => {
  let bracketsStack = [], curr, last;

  for(let i = 0; i < str.length; i++) {
    curr = str[i];
    if(curr === '(') {
      bracketsStack.push(curr);
    } else {
      last = bracketsStack.pop();
      if(last !== '(' || curr !== ')') {
        return 0;
      }
    }
  }
  return bracketsStack.length === 0 ? 1 : 0;
}

module.exports = nesting;
