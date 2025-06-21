// Currying Example
// Conver function f(a,b) to f(a)(b)

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

console.log(infiniteCurryingSum(2)(3)(5)(8));


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


// --------------------------------------------Ques-------------------------------------------
// Implement curry - Convert function f(a,b,c) to f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }
        else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a,b,c) => a+b+c;
const totalSum = curry(sum);
console.log(`Currying Function to convert f(a,b,c) into f(a)(b)(c) - totalSum ${totalSum(1)(2)(3)}`);