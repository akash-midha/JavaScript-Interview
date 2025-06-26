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

