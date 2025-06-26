// Promise Polyfill

function PromisePolyfill(executor) {

    let onResolve,
        onReject,
        value,
        isFulfilled = false,
        isRejected = false,
        isCalled = false

    function resolve(val) {
        isFulfilled = true;
        value = val;

        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;

        if (typeof onReject === 'function') {
            onReject(val);
            isCalled = true
        }
    }

    this.then = function (cb) {
        onResolve = cb;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function (cb) {
        onReject = cb;
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }
    try {
        executor(resolve, reject);
    }
    catch (error) {
        reject(error);
    }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
});

examplePromise
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));