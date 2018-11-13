function all(promises) {
  return new Promise((res, rej) => {
    const numberOfPromises = promises.length;
    let priorityQueue = [];

    if (numberOfPromises === 0) {
      res(priorityQueue);
    }

    promises.forEach((p, i) => {
      if (!(p instanceof Promise)) {
        p = Promise.resolve(p);
      }

      p.then(d => {
        priorityQueue.push([d, i]);

        if (priorityQueue.length >= numberOfPromises) {
          priorityQueue.sort((a, b) => a[1] - b[1]);
          res(priorityQueue.map(a => a[0]));
        }
      }).catch(error => rej(error));
    });
  });
}

module.exports = all;
