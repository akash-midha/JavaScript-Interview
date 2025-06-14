// let, var and const

// ------------------------------------------Question-------------------------------------------

function abc() {
    console.log(a);
    var a = 10;
}

abc();

// ------------------------------------------Question-------------------------------------------

console.log(a);
var a = 10;
console.log(a);
{
    console.log(a);
    var a = 20;
    console.log(a);
}
console.log(a);
var a = 30;
console.log(a);

// It will always have a in global scope unlike let and const which will have block scope

// ------------------------------------------Question-------------------------------------------

function abc() {
    console.log(a,b,c);
    var a = 10;
    let b = 20;
    const c = 30;
}

abc();

// Uncaught Reference Error -> cannot access b before initialization. will not print a even as its in same line.

// ------------------------------------------Question-------------------------------------------