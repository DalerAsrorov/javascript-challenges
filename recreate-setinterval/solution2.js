const func = d => console.log('hi', d);

let mySetInterval = function(fn, time) {
  mySetInterval.intervals = mySetInterval.intervals
    ? mySetInterval.intervals
    : new Map();
  mySetInterval.id = mySetInterval.id ? mySetInterval.id + 1 : 1;

  let intervalsMap = mySetInterval.intervals;

  intervalsMap.set(
    this.id,
    setTimeout(function next() {
      intervalsMap.set(this.id, setTimeout(next, time));
      fn.apply(this, arguments);
    }, time)
  );

  return mySetInterval.id;
};

function clearInterval(id) {
  clearTimeout(mySetInterval.intervals.get(id));
}

this.interval1 = mySetInterval(() => {
  clearInterval(this.interval1);
  func('daler');
}, 5000);
this.interval2 = mySetInterval(() => {
  clearInterval(this.interval2);
  func('allan');
}, 5000);
this.interval3 = mySetInterval(() => {
  //   clearInterval(this.interval3);
  func('dj');
}, 5000);

// this.interval2 = mySetInterval(() => {
//   func('daler');
// }, 5000);
