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