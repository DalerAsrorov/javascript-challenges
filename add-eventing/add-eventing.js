const EventEmitter = require('events');

// solution 1 (fails emit listener test)
// const addEventing = function(obj) {
//   let eventCache = {};

//   obj.on = (eventName, callback) => {
//     if (eventCache[eventName]) {
//       eventCache[eventName] = [...eventCache[eventName], callback.bind(obj)];
//     } else {
//       eventCache[eventName] = [callback.bind(obj)];
//     }
//   };

//   obj.trigger = eventName => {
//     if (eventCache[eventName]) {
//       eventCache[eventName].forEach(callbackFn => {
//         callbackFn();
//       });
//     }
//   };

//   return obj;
// };

// Using EventEmitter - passes all tests
const addEventing = function(obj) {
  let eventEmitter = new EventEmitter();

  obj.on = (eventName, callback) => {
    eventEmitter.on(eventName, callback);
  };

  obj.trigger = eventName => {
    if (eventEmitter.eventNames().includes(eventName)) {
      eventEmitter.emit(eventName);
    }
  };

  return obj;
};

module.exports = addEventing;
