// Polyfill for map

Array.prototype.myMap = function (cb) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(cb(this[i], i, this));
    }
    return results;
}


// Polyfill for filter

Array.prototype.myFilter = function (cb) {
    let results = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            results.push(this[i]);
        }
    }
    return results;
}


// Polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let sI = initialValue !== undefined ? 0 : 1;
    for (let i = sI; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }
    return accumulator;
}