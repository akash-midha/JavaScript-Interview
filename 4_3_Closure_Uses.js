// --------------------------------------------Ques----------------------------------------
// 1. Example of Time Optimization

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




//2. // --------------------------------------------Ques----------------------------------------
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


function counter(){
    var _count = 0;

    function add(num){
        _count+=num;
    }

    function retrive(num){
        console.log(_count);
    }

}


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