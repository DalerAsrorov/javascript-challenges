const addEventing = function addEventing(obj) {
    let cache = new Map();

    obj.on = (eventName, actionFn) => {
        if (cache.has(eventName)) {
            cache.set(eventName, [...cache.get(eventName), actionFn]);
        } else {
            cache.set(eventName, [actionFn]);
        }
    };
    obj.trigger = (eventName, ...restArgs) => {
        if (cache.has(eventName)) {
            cache.get(eventName).forEach((actionFn) => {
                actionFn.call(this, ...restArgs);
            });
        }
    };

    return obj;
};

module.exports = addEventing;
