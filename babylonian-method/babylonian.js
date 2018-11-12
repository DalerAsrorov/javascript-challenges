const floor = Math.floor;

const guess = x => x / 2;

const squareRoot = radicand => {
  if (typeof radicand !== 'number' || radicand < 0) {
    return NaN;
  }
  if (radicand === 0) {
    return 0;
  }

  let x = radicand;
  let y = 1;

  while (x - y > 0.0) {
    x = (x + y) / 2;
    y = radicand / x;
  }

  return x;
};

console.log(squareRoot(49));

module.exports = squareRoot;
