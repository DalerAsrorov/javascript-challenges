

const OPPOSITE_CHAR_MAPPING = {
  ')': '(',
  ']': '[',
  '}': '{'
};

const parensAreBalanced = input => {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    let s = input[i];

    if (s === '(' || s === '[' || s === '{') {
      stack.push(s);
    } else if (OPPOSITE_CHAR_MAPPING[s]) {
      const lastBeginning = stack.pop();
      const beginning = OPPOSITE_CHAR_MAPPING[s];

      if (lastBeginning !== beginning) {
        return false;
      }
    }
  }

  return !stack.length;
};

module.exports = parensAreBalanced;
