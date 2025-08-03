// Currying Example
// Write the function f(a,b) to f(a)(b)

// What is currying?

// Currying is a technique in functional programming where a function is transformed into sequence of functions each taking one argument.

function withoutCurrying(a, b) {
    return a + b;
}

console.log(withoutCurrying(2, 3));

function withCurrying(a) {
    return function (b) {
        return a + b;
    }
}

console.log(withoutCurrying(2, 3));
console.log(withCurrying(2)(3));


// --------------------------------------------Ques-------------------------------------------
// Implement function which takes operation and two variables a,b currying sum(4)(2), difference, product, divide


function calculate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') return a + b;
            else if (operation === 'subtract') return a - b;
            else if (operation === 'product') return a * b;
            else if (operation === 'divide') return a / b;
            else return "Invalid operation";
        }
    }
}

const calculateSum = calculate('sum');
console.log(`The sum is ${calculateSum(4)(2)}`)

console.log(calculate('sum')(4)(2));
console.log(calculate('subtract')(4)(2));
console.log(calculate('product')(4)(2));
console.log(calculate('product')(4)(2));

// --------------------------------------------Ques-------------------------------------------
// Infinite Currying - It should be flexible with any no of inputs

function infiniteCurryingSum(a) {
    return function (b) {
        if (b) {
            return infiniteCurryingSum(a + b);
        }
        return a;
    }
}

console.log(infiniteCurryingSum(2)(3)(5)(8)());

// It will work only if we pass a last empty call for infiniteCurryingSum(2)(3)(5)(8), it will return function


// How to fix?

function infiniteCurry2(a) {
    function inner(b) {
        a += b;
        return inner;
    }

    inner.toString = () => a;

    inner.valueOf = () => a;

    return inner;
}


// --------------------------------------------Ques-------------------------------------------
// Partial Application vs Currying

function partialApplication(a) {
    return function (b, c) {
        return a + b + c;
    }
}

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}


// --------------------------------------------Ques-------------------------------------------
// How can we implement DOM using currying?

function updateElementText(id) {
    return function (content) {
        document.getElementById(id).textContent = content;
    }
}

const updateText = updateElementText('heading');
updateText('JavaScript');