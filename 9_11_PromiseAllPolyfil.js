// Promise.all() is a method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((res) => {
                    results[idx] = res;
                    pending--;
                    if (pending == 0) {
                        resolve(results);
                    }
                })
                .catch(reject);
        })
    })
}
const promiseAll = Promise.all([pr1, pr2, pr3]);

promiseAll
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));