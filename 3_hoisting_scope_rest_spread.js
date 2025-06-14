// ------------------------------------------Question-------------------------------------------
// First class function example

function square(num) {
    return num * num;
}

function displaySquare(cb) {
    console.log(cb(5));
}

displaySquare(square);


// ------------------------------------------Question-------------------------------------------
// Give example of IIFE

(function square(num) {
    return num * num;
})(2);


// ------------------------------------------Question-------------------------------------------
// IIFE - What will be output ?

(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);


// ------------------------------------------Question-------------------------------------------
// Ques based on function scope and setTimeOut


for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
}


for (var i = 0; i < 5; i++) {
    function call(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    };
    call(i);
}



// ------------------------------------------Question-------------------------------------------
// Ques based on Hoisting

var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
}

fun();


// ------------------------------------------Question-------------------------------------------
// Ques based on rest / spread


function print(a, b, c, ...nums) {     // rest operator
    console.log(a, b, c);
    console.log(nums);
}

var arr = [1, 2, 3, 4, 5, 6];

print(...arr);   //spread operator





// ------------------------------------------Question-------------------------------------------
// Ques based on rest / spread

//Note: Rest operator must always be last paramater.
// spread can be anywhere in arguments


const fn = (a, x, y, ...numbers) => {
    console.log(a, x, y, numbers);
}
let arr = [1, 2];
fn(5, 6, ...arr, 3, 7, 8, 9);


// ------------------------------------------Question-------------------------------------------
// Ques based on this


let user = {
    username: "Akash",
    rc1: () => {
        console.log("My name is " + this.username);
    },
    rc2() {
        console.log("My name is " + this.username);
    }
}

user.rc1();
user.rc2();