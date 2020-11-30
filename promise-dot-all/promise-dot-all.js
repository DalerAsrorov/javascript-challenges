function all(promises) {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      res([]);
    }
    const nPromises = promises.length;
    let priorityQueue = [];

    for (let i = 0; i < nPromises; i++) {
      const p = promises[i];

      Promise.resolve(p)
        .then(pValue => {
          priorityQueue.push([pValue, i]);

          if (priorityQueue.length === nPromises) {
            const sorted = priorityQueue.sort((a, b) => a[1] - b[1]);
            res(sorted.map(el => el[0]));
          }
        })
        .catch(error => {
          rej(error);
        });
    }
  });
}

module.exports = all;
