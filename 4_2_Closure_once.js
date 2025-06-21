// Make a function such that it print something once only

function printOnce() {
    let called = 0;
    return function () {
        if (called == 0) {
            console.log('It will print only once');
            called++;
        }
    }
}

const callOnce = printOnce();
callOnce();
callOnce();
callOnce();
callOnce();
callOnce();


// Polyfill for once

function once(func, context) {
    let ran;

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    };
}

const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2);
hello(3, 4);
hello(4, 5);



// Implement caching / memoize function

const clumsyProduct = (num1, num2) => {
    for (let i = 0; i < 1000000; i++) {

    }
    return num1 * num2;
}

console.time('First call');
console.log(clumsyProduct(2, 5));
console.timeEnd('First call');

console.time('Second call');
console.log(clumsyProduct(2, 5));
console.timeEnd('Second call');

// we want to cache / memoize the results

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache];
    }
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizedClumsyProduct(2, 5));
console.timeEnd('First call');

console.time('Second call');
console.log(memoizedClumsyProduct(2, 5));
console.timeEnd('Second call');