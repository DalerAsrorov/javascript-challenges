// solution 1
const mostRecurrent = set => {
  let cache = {};

  for (let i = 0; i < set.length; i++) {
    let num = set[i];

    if (!cache[num]) {
      cache[num] = [1, i, num]; // (count, firstIndex, num)
    } else {
      cache[num][0] += 1;
      ``;
    }
  }

  const sorted = Object.values(cache).sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    } else if (a[0] > b[0]) {
      return -1;
    } else {
      if (a[1] < b[1]) {
        return -1;
      }
      return 0;
    }
  });

  return sorted[0][2];
};

module.exports = mostRecurrent;
