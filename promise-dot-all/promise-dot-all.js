function all(promises) {
  return new Promise((res, rej) => {
    let dataPoints = [];

    if (!promises.length) {
      res(dataPoints);
    }

    promises.forEach((p, i) => {
      let resP = Promise.resolve(p);

      resP.then((data) => {
        dataPoints.splice(i, 0, data);
        if (dataPoints.length >= promises.length) {
          res(dataPoints);
        }
      }).catch((err) => {
        dataPoints = [];
        rej(err);
      });
    });
  });
}

module.exports = all;
