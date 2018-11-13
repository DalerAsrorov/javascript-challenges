const func = () => console.log('hi');

const mySetInterval = (fn, num) => {
  setTimeout(() => {
    fn();
    mySetInterval(fn, num);
  }, num);
};

mySetInterval(() => {
  func();
}, 5000);
