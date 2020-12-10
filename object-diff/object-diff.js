function findAdditions(newCode, oldCode, changeList, changeStr) {
  const newKeys = Object.keys(newCode);
  const oldKeys = Object.keys(oldCode);

  for (let newKey of newKeys) {
    if (!oldCode[newKey] || oldCode[newKey] !== newCode[newKey]) {
      changeStr += newKey;
    }
  }
}

const diff = (newCode, oldCode) => {
  // [[ '+', 'oranges.navel.apples', 3 ], ...]
  const additions = findAdditions(newCode, oldCode, [], '');

  return [];
};

module.exports = diff;
