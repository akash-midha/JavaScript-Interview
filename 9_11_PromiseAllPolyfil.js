Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((res) => {
                results[idx] = res;
                pending--;
                if (pending == 0) {
                    resolve(results);
                }
            }).catch(reject);
        })
    })
}

Promise.allPoly = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((pr, i) => {
            Promise.resolve(pr).then((res) => {
                results[i] = res;
                pending--;
                if (pending === 0) {
                    resolve(results);
                }
            }).catch(reject);
        })
    })
}


const promiseAll = Promise.all([pr1, pr2, pr3]);

promiseAll
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));