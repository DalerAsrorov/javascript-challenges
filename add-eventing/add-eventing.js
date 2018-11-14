// solution 1 (fails emit listener test)
const addEventing = function(obj) {
  let eventCache = {};

  return {
    on: (eventName, callback) => {
      if (eventCache[eventName]) {
        eventCache[eventName] = [...eventCache[eventName], callback.bind(obj)];
      } else {
        eventCache[eventName] = [callback.bind(obj)];
      }
    },
    trigger: (eventName, ...args) => {
      if (eventCache[eventName]) {
        eventCache[eventName].forEach(callbackFn => {
          callbackFn(...args);
        });
      }
    }
  };
};

module.exports = addEventing;
