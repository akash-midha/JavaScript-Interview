// --------------------------------------------Ques----------------------------------------
// Closure 



function makeFunc() {
    var name = "Mozilla";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

var myFunc = makeFunc();
myFunc();


// --------------------------------------------Ques----------------------------------------
// Scope chaining


var e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));



// --------------------------------------------Ques----------------------------------------
// o/p ques

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1;              //shadowing
        console.log(count);
    }
    console.log(count);
})();



// --------------------------------------------Ques----------------------------------------
// Write a func that would allow to do this
// var addSix = createBase(6);
// addSix(10);------->returns 16
// addSix(21);----------> 27


// First, we are calling createBase function with certain value and it is returning us a closure 
// addSix and then we are calling this addSix closure and which value we are passing in the closure it is returning by giving 
// us adding the initial value.

// This we can also give an example of private properties.

function createBase(num) {
    return function (innerNum) {
        console.log(innerNum + num);
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);


// --------------------------------------------Ques----------------------------------------
// Example of Time Optimization

//without closure

function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = a[i] * a[i];
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("125");
find(125);
console.timeEnd("125");


// with closure

function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = a[i] * a[i];
    }
    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");

console.time("125");
closure(125);     // uses precomputd array
console.timeEnd("125");



// --------------------------------------------Ques----------------------------------------
// Print 0,1, 2, setTimeOut using var
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, 1000);
    }
}
a();


function a() {
    for (var i = 0; i < 3; i++) {
        function innerFunc(i) {
            setTimeout(function log() {
                console.log(i);
            }, 1000);
        }
        innerFunc(i);
    }
}
a();


// --------------------------------------------Ques----------------------------------------
// Create a private counter using closure.


function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrive() {
        console.log(`Counter value is ${counter}`);
    }

    return { add, retrive };
}

const c = counter;
c.add(5);
c.add(10);
c.retrive();



// --------------------------------------------Ques----------------------------------------
// Module patterns

var ModulePattern = () => {
    const privateFunction = () => {
        console.log("Private function is called");
    }

    const publicFunction = () => {
        console.log('public function is called');

    }

    return {
        publicFunction
    }
}
ModulePattern().publicFunction();

// If I try to call ModulePattern().privateFunction(), it will throw an error (Uncaught TypeError: ModulePattern().privateFunction() is not a function   ) because privateFunction is not part of returned object.

// GPT
// Write a function createCounter() that returns a function.
// Each time you call that function, it should return the next number, starting from 1.


const createCounter = (start = 1) => {
    return function () {
        return start++;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3 