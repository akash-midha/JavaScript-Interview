// Call, Bind, Apply in JavaScript


// call() method in JavaScript is used to explicitly bind the this value inside a function to a specific object and then immediately invoke that function.

var obj = { name: "Piyush" };

function sayHello(age, city) {
    return "Hello" + this.name + age + city;
}

sayHello.call(obj, 24, "Delhi");


// Apply
// The apply() method is just like call(), but it takes arguments as an array (or array-like object) instead of a comma-separated list.

sayHello.apply(obj, [24, "Delhi"]);

// Bind
// bind() returns a new function with this permanently bound to the provided object.

const bindFunc = sayHello.bind(obj); // bind return us a function
console.log(bindFunc); // this will print f sayHello(){}
bindFunc(age, city); // now we can call this whenevr we want




