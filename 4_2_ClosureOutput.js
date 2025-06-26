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

//1 , 0


// --------------------------------------------Ques----------------------------------------
// Write a func that would allow to do this
// var addSix = createBase(6);
// addSix(10);------->returns 16
// addSix(21);----------> 27


function createBasic(num){
    return function(innerNum){
        return num+innerNum;
    }
}

const addFive = createBasic(5);
const ans = addFive(10);

function createBase(num) {
    return function (innerNum) {
        console.log(innerNum + num);
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);


// First, we are calling createBase function with certain value and it is returning us a closure 
// addSix and then we are calling this addSix closure and which value we are passing in the closure it is returning by giving 
// us adding the initial value.

// This we can also give an example of private properties.
