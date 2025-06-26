// Output - 1 What will be output

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const fn = outer();
fn();
fn();
fn();

// Ans - 1 2 3
// Since fn retains access to the same count variable via closure, it continues updating the same value.



//Ques - implement a counter using closures so that it behaves like this:

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


//Answer

function createCounter() {
    var _count = 0;
    return function counter() {
        return ++_count;
    }
}



// Implement a createBankAccount function that:Starts with an initial balance
// Allows only three operations:
// getBalance()
// deposit(amount)
// withdraw(amount)
// Prevents direct access to the balance from outside


function createBankAccount(initialAmount) {
    var _amountInBank = initialAmount;

    function getBalance() {
        return _amountInBank;
    }

    function deposit(amount) {
        _amountInBank += amount;
    }

    function withdraw(amount) {
        _amountInBank -= amount;
    }

    return { getBalance, deposit, withdraw };
}


const customer1 = createBankAccount(1000);
customer1.deposit(100);
customer1.withdraw(500);
customer1.getBalance();




// Ques 

// Write a function createMultiplier(factor) that returns a new function which multiplies any given number by that factor.

// Example-
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12


//Answer

function createMultiplier(num) {
    return function (innerNum) {
        return num * innerNum;
    }
}



for (var i = 0; i < 5; i++) {
    (function close(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    })(i);
}




// Ques - what will be output


function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(10 + i);
        });
    }

    return arr;
}

const funcs = buildFunctions();
funcs[0]();
funcs[1]();
funcs[2]();


// Ans - 13 13 13

// Modify it to log 10 11 12

// first using let
// second using IIFE

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        (function close(i) {
            arr.push(function () {
                console.log(10 + i);
            });
        })(i);
    }

    return arr;
}