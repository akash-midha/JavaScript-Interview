// Give examples of closure-

function x(a) {
    function y(b) {
        console.log(a, b);
    }
    y(2);
}
x(3);

// Even though a is not declared inside y, we still can acess a inside x as y binds with x to form closure.


function func1(a){
    return function func2(b){
        console.log(a,b);
    }
}

var z = func1(2);
z(3);


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