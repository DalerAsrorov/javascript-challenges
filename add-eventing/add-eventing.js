const addEventing = function(obj) {
  let eventCache = {};

  obj.on = (eventName, callback) => {
    if (eventCache[eventName]) {
      eventCache[eventName] = [...eventCache[eventName], callback.bind(obj)];
    } else {
      eventCache[eventName] = [callback.bind(obj)];
    }
  };
  obj.trigger = (eventName, ...args) => {
    if (eventCache[eventName]) {
      eventCache[eventName].forEach(callbackFn => {
        callbackFn(...args);
      });
    }
  };

  return obj;
};

module.exports = addEventing;
