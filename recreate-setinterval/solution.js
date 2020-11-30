function mySetInterval(fn, timer = 0) {
    mySetInterval.intervalMap = mySetInterval.intervalMap ?
        mySetInterval.intervalMap : new Map();
    mySetInterval.id = mySetInterval.id ? mySetInterval.id + 1 : 1;

    let { id: currId, intervalMap } = mySetInterval;

    intervalMap.set(currId, setTimeout(function next() {
        intervalMap.set(currId, setTimeout(next, timer));
        fn();
    }, timer));

    return currId;
}

function clearMyInterval(id) {
    clearTimeout(mySetInterval.intervalMap.get(id));
}


/**
 * Testing the function
 */
const doCounting = (clock, counterLimit, callback) => {
    clock.counter += 1;
    console.log(`Interval ${clock.name} executed ${clock.counter} times`);

    if (clock.counter === counterLimit) {
        callback();
    }
};

let clock = {
    name: 'A',
    counter: 0
};
let interval1 = mySetInterval(doCounting.bind(null, clock, 10, () => {
    clearMyInterval(interval1);
}), 1000);


let clock1 = {
    name: 'B',
    counter: 0
};
let interval2 = mySetInterval(doCounting.bind(null, clock1, 10, () => {
    clearMyInterval(interval2);
}), 1200);
