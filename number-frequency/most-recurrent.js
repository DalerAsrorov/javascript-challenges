// solution 1
const mostRecurrent = set => {
  if (set.length === 0) {
    return null;
  }

  const freqMap = set.reduce((accum, curr) => {
    if (accum.has(curr)) {
      accum.set(curr, accum.get(curr) + 1);
    } else {
      accum.set(curr, 1);
    }
    return accum;
  }, new Map());

  let maxFreq = -1;
  let maxEl = set[0];
  for (let [el, freq] of freqMap.entries()) {
    if (freq > maxFreq) {
      maxFreq = freq;
      maxEl = el;
    }
  }

  return maxEl;
};

module.exports = mostRecurrent;
