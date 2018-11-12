let PARENS_MAPPING = {
  '[': ']',
  '(': ')',
  '{': '}'
};

const parensAreBalanced = input => {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      let popped = stack[stack.length - 1] ? stack.pop() : '#';

      if (char !== PARENS_MAPPING[popped]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

let result = parensAreBalanced('{}');

module.exports = parensAreBalanced;
