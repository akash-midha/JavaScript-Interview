# JavaScript-Interview
This repository includes JavaScript interview notes and questions.

# WHAT IS JAVASCRIPT ?

1. JavaScript was created by Brendan Eich in 1995 while he was working at Netscape Communications. Initially called Mocha, it was later renamed LiveScript and then finally JavaScript due to increasing popularity of Java. 

2. It was developed to add interactivity to websites and run in web browsers. JavaScript became standardized as ECMAScript in 1997, ensuring consistency across different browsers.

3. JavaScript is most love, most hated and most beautiful language.

4. Scripting Language - It is a type of programming language that interprets instructions individually at runtime rather than compiling them in advance.

5. JS is weakly-typed or loosely-typed language, it means it doesn't depend on data type declarations. Same variable can be used to store number, string, boolean type values.

```javascript
var a;
a = 5;
a = "hello";
a = true;
```

6. JavaScript is synchronous single threaded-language. Single threaded means it can execute one command at a time.

7. **Synchronous Single threaded means JavaScript can execute only one command at a time in specific order it is written and each operation must finish before next one starts.**

#### How JS can handle asynchronous tasks ?

**JavaScript handles asynchronous tasks using mechanisms like callbacks, async-await, promises. While JavaScript itself is synchronous, it offloads time-consuming tasks such as i/o operation, fetching data to event loop. This allow rest of the code to keep running without waiting for these tasks to finish.**

**Once the task is done, the event loop picks callback to be executed from the callback queue and executes the callback or promise resolution, effectively handling tasks without blocking the main thread.**

# DATA TYPES IN JAVASCRIPT

### Primitive Type

These are immutable and stored by value.

| Type      | Example                      |
|-----------|------------------------------|
| String    | `"hello"`, `'abc'`           |
| Number    | `42`, `3.14`                 |
| Boolean   | `true`, `false`              |
| Null      | `null`                       |
| Undefined | `undefined`                  |
| Symbol    | `Symbol("id")`               |
| BigInt    | `123n`, `BigInt(999)`        |


### Non-Primitive / Reference Types

Stored by reference (mutable).


| Type      | Example                               |
|-----------|---------------------------------------|
| Object    | `{ name: "Alice" }`, `[1, 2, 3]`      |
| Function  | `function() {}`, `() => {}`           |

### JavaScript Type Behaviors, Coercion & Quirks

#### 🔹 Arrays, Dates, Maps, and Sets Are Objects

- Arrays are also objects.
- Dates, Maps, and Sets are also objects.

```js
typeof []   // "object"
typeof {}   // "object"
```

#### 🔹 Functions Are Special Objects

- Even though functions are technically objects, JavaScript treats them as a **special kind** of object.
- `typeof` returns `"function"` for them.
- This also applies to **classes**, which are syntactic sugar over functions.

```js
typeof (() => {})         // "function"
typeof function() {}      // "function"
typeof class MyClass {}   // "function"
```

---

#### 🔹 typeof `null` → `"object"` ❗

- This is a long-standing **bug** in JavaScript.
- `null` is **not** actually an object.
- The behavior is preserved for **backward compatibility**.

```js
typeof null   // "object"
```

---

### 🔹 typeof `undefined` → `"undefined"`

```js
typeof undefined   // "undefined"
```

---

#### 🔹 typeof `NaN` → `"number"`

```js
typeof NaN   // "number"
NaN === NaN  // false
NaN == NaN   // false
Number.isNaN(NaN)  // true
```

---

#### 🔹 Type Coercion Examples

- `String + Number` → **String**
- `String - Number` → **Number** (if possible), else **NaN**

```js
console.log("5" + 2 - 1);            // "52" - 1 => 51
console.log("5" + true);            // "5true"
console.log("5" + true - undefined); // "5true" - undefined => NaN
console.log("5" + true + undefined); // "5trueundefined"
console.log("10" * null);           // 0 (null coerces to 0)
console.log("10" * undefined);      // NaN (undefined coerces to NaN)
console.log("5" / false);           // (False coerces to 0) Infinity
console.log(null + true);           // 1
console.log(undefined + "5");       // "undefined5"
console.log("10" - true + null);    // 9
console.log([] + false - null + true); // ("" + "false" -> "false" - null -> NaN - null -> NaN + true = NaN)   NaN
```

---

#### 🔹 Arrays in Coercion

- Arrays get converted to **strings** during addition.

```js
console.log([] + []);               // "" (empty string)
console.log([2, 3, 4] + [1, 2, 3]); // "2,3,41,2,3"
```

---

#### 🔹 Other Weird Coercions

```js
console.log(true + true);           // 2
```

**JavaScript Conversion Steps:**

- `[]` → `""` → `0`
- `false` → `0`

---

#### 🔹 Falsy Values in JavaScript

- `false`, `0`, `""`, `null`, `undefined`, `NaN`

> ✅ Note: Empty **array** (`[]`) and empty **object** (`{}`) are **truthy** values. This is because objects are always truthy in JS.

```js
[] == 0         // true ([] becomes empty string "" and "" is coerced to 0 so 0 == 0)
[] == "0"       // false ([] becomes empty string "" and "" is not equal to "0")
{} == 0         // false ({} -> "[object Object]" so "[object Object] == 0 => NaN == 0 which is false")
{} == "0"       // false ({} -> "[object Object]" so "[object Object] == "0" => false")

console.log([] + {});    // "[object Object]"   because "" + "[object Object]"
console.log({} + []);    // 0 (Js parse {} as empty block , so empty block + "", this empty string is coerced to 0, so {} + 0 is 0) 
```

---

#### 🔹 Function Declaration Inside Block Scope

```js
if (true) {
  function test() {
    return "hi";
  }
}
console.log(typeof test); // "function" in some environments, "undefined" in others
```

> This is due to **inconsistent function hoisting** inside blocks.

---

#### 🔹 Tricky Equality

```js
console.log([] == ![]); // true
// Step by step:
// ![] → false
// [] == false
// [] → "" → 0
// false → 0
// 0 == 0 → true

console.log([] == false); // true ( 0 == false)

console.log([null] == ""); // true
// [null] → "" → equals ""
```

---

#### 🔹 Number Conversion

```js
Number(undefined); // NaN
```


## EcmaScript

EcmaScript is standardized specification for scripting such as JavaScript, JScript, ActionScript.
It defines the core features and syntax which a language should support.
EcmaScript ensures that JS behaves the way across different environments such as web browsers and server-side platforms.

### Versions of EcmaScript

1. ES1 (1997) : Basic syntax and structure, var, control flows, loops, functions.
2. ES3 (1999) : First widely adopted version, foundation of JS.
3. ES5 (2009) : Strict mode, getters and setters, array methods.
4. ES6 (2015) : Promises, let & const, template literals, map & sets, weakmap & weaksets, classes, rest and spread operator, arrow functions, symbol data type, modules , destructuring assignments.
5. ES7 (2016) : exponentiation operator (**) , Array.prototype.includes
6. ES8 (2017) : Async/Await - made asynchronous code more readable.
7. ES9 (2018) : asynchronous iteration and the rest/spread operator for objects.
8. ES10 (2019) : Array.prototype.flat and flatMap.

After 2015 (ES6), ECMAScript updates have been released yearly.

### ES6 features of JavaScript

#### Arrow Functions
```javascript
const add = (a, b) => a + b;
```

#### Classes

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

#### Template Literals

```javascript
const name = 'Alice';
console.log(`Hello, ${name}`);
```

#### Promises

```javascript
new Promise((resolve, reject) => {
  // async operation
});

```

#### let and const

```javascript
let count = 1;
const PI = 3.14;

```
#### Rest & Spread Operator

```javascript
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

```

#### Default Parameters

Allows function parameters to have default values:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();       // Hello, Guest!
greet('John'); // Hello, John!

```

#### Symbol data type

```javascript
const sym = Symbol('description');
console.log(sym); // Symbol(description)

```
#### Modules

Split code into reusable pieces using export and import:

```javascript
// module.js
export const greet = () => console.log("Hello from the module!");

// main.js
import { greet } from './module.js';
greet(); // Hello from the module!

```

#### Destructuring Assignments

Array Destructuring

```javascript
const arr = [1, 2, 3];
const [a, b] = arr; // a = 1, b = 2

```

Object Destructuring

```javascript
const person = { name: 'Alice', age: 25 };
const { name, age } = person; // name = 'Alice', age = 25

```

#### Map and Set Data-Structure

Map: A collection of key-value pairs where keys and values can be any type:

```javascript
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name')); // Alice
map.delete('age');
console.log(map.has('name')); // true
map.clear();
```

Set: A collection of unique values::

```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate ignored
console.log(set); // Set {1, 2}
set.delete(2);
console.log(set.has(1)); // true
set.clear();
```


#### Weak Map and Weak Set Data-Structure

- WeakMap: Like Map, but keys must be objects (not primitives).

- WeakSet: Like Set, but values must be objects.

- Keys/values are weakly referenced (do not prevent garbage collection).

- No size or iteration methods available.

- Useful for memory-efficient data structures.

- Allows storing metadata for objects (e.g., DOM elements) without preventing garbage collection.

```javascript
const weakMap = new WeakMap();
let user = { name: "Alice" };
weakMap.set(user, "some data");

user = null; // The object may now be garbage collected (and removed from WeakMap)

const weakSet = new WeakSet();
let obj = { id: 1 };
weakSet.add(obj);

obj = null; // The object can now be garbage collected

```

## EXECUTION CONTEXT

Everything in JS happens in an execution context. Whenever any code is executed, an execution context is created which is global execution context.

An execution context is a box which contains 2 components.
    - Memory Component (Environment variable) : Here all variables and functions are stored as key-value pairs. Variables are assigned undefined and literally the whole functions in case of functions.

    - Code Component (Thread of Execution) : Code is executed here one lime at a time.


**Execution context is created in 2 phases - Memory creation phase and Thread of execution.**

        · Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the that scope. Special keyword undefined is assigned to variables and literally the whole function in case of functions.
         
        · Code Execution Phase : In this Phase, code is executed line by line.**

Whenever there is function invocation, new execution context is created and same process is followed again.

If there is any function parameter it is also allocated memory.

**Whenever any return keyword is encountered, it means the task of function is over and it returns the control of the program back to the place it was invoked and with this execution context is deleted from the stack.**

**Call Stack** - **It is a stack which maintains the order of execution of execution context.Whenever a code is executed, GEC is created and pushed into the stack and later on as per the function invocation, the execution context is created and pushed into the call stack. When the function code is done executing the execution context is popped out and in last global execution context is also deleted.**

Call Stack is also called execution context stack, program stack, control stack, runtime stack, machine stack etc.

Whenever an execution context is created, this variable is also created.


## HOISTING

**Hoisting is a mechanism in JS where the variables and functions declarations are moved to the top of the scope before execution. It means they all are declared before the execution of the code.**

Hoisting is not about physically moving code to the top, but rather how JS allocates memory for variables and functions during the memory creation phase of the execution context.

1. The variables get initialized to undefined.
2. Arrow functions enact as variables and get assigned undefined during memory creatio phase and functions get actually the exact value.
3. It is possible to call a function before initializing it because entire function is available in the memory.

```javascript
sayHello(); // Output: Hello!

function sayHello() {
  console.log("Hello!");
}

```

4. Trying to access the variable before declaration result in undefined.

```javascript
console.log(a); // Output: undefined
var a = 20;
```

5. Function expressions and arrow functoions which are assigned undefined, trying to accesss them before initialization results in refernce error.

```javascript
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
const foo = function () {
  console.log("Hello from function expression");
};

```

```javascript
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
const bar = () => {
  console.log("Hello from arrow function");
};
```

#### Shortest JS Program

Shortest JS program is an empty file. Though there is nothing in the code, JS engine still creates GEC and set up memory. JS engine creates a global window object.

### Global Space

Any code in JS which is not inside any function or block, is inside global space / scope.
In global level, this === window.
whatever variables or functions we write in global space, gets attached to global object (window in case of browsers).

```javascript
var a = 10;
console.log(a);
console.log(window.a);
console.log(this.a);

// All are same and prints 10
```

### Undefined 

1. **Undefined is a special placeholder in JS which is used to reserve memory for variables in memory creation phase.**
    - Undefined itself is a datatype.

2. Even before single line of code is executed, JS engine assigns undefined to variables.

3. **Not defined** : This comes as an error when JS engine neither find that particular variable nor its placeholder in the scope chain.

```javascript
console.log(x);
var x = 1;
a();
console.log(x);
 
function a(){
    var y= 10;
    console.log(y);
}
 
console.log(window.x);
console.log(x);
console.log(y);
```

The output is:

```bash
    undefined
    10
    1
    1
    1
    Uncaught ReferenceError: y is not defined
```


```javascript
var a;
console.log(a);    // undefined

if(a===undefined){
    console.log('true');      //true
}
```

The output is:

```bash
    undefined
    true
```

## VAR, LET , CONST

### Difference Between `var`, `let`, and `const`

| Feature                      | `var`                                | `let`                                 | `const`                                |
|------------------------------|--------------------------------------|---------------------------------------|----------------------------------------|
| Scope                        | Function Scope                       | Block Scope                           | Block Scope                            |
| Re-declaration               | Allowed                              | Not Allowed                           | Not Allowed                            |
| Re-assignment                | Allowed                              | Allowed                               | Not Allowed                            |
| Hoisting                     | Yes (initialized as `undefined`)     | Yes (but not initialized, Temporal Dead Zone) | Yes (but not initialized, Temporal Dead Zone) |
| Default Initialization       | `undefined`                          | No                                    | No                                     |
| Temporal Dead Zone (TDZ)     | No                                   | Yes                                   | Yes                                    |
| Global Object Property (in browsers) | Yes (`window.varName`)             | No                                    | No                                     |
| Use Case                     | Legacy code, avoid in modern JS      | Preferred for variables that change   | Preferred for constants (no reassignment) |

> 🔹 **Note:** `const` does not mean immutable. For objects/arrays declared with `const`, properties/elements can still be changed.
=> **const is only assignment immutable.**
=> When there is syntax error, not even one line of code is executed. It is compilation error.
=> ReferenceError and TypeErrror are runtime errors and caught in betweeen


Level of strictness: var < let < const
=> const declaration and initialization must be done on same line.

```javascript
var a;
var a = 10;
var a = 50;
console.log(a);   //50
```


```javascript
let a;
a = 10;
a = 50;
console.log(a);   //50
```

### ✅ 3 Different Types of Errors in JavaScript

| **Error Type**      | **When It Occurs**                                                                  | **Example**                        | **Description**                                                              |
|---------------------|--------------------------------------------------------------------------------------|------------------------------------|------------------------------------------------------------------------------|
| **Syntax Error**     | When the JavaScript code is not written in proper syntax. Similar to compilation error                           | `console.log("Hello"`              | Missing closing parenthesis or bracket. Code won’t run at all.              |
| **Reference Error**  | When trying to access a variable that hasn’t been declared.                         | `console.log(x); // x not defined` | Variable is not in scope or not declared.                                   |
| **Type Error**       | When a value is not of the expected type or an operation is done on the wrong type. (eg- re-initializing const variable) | `null.toUpperCase()`              | Performing invalid operations on a type.                                    |


```javascript
var a;
let b;
const c; //SyntaxError: missing initializer in const declaration.
c = 10;
```

```javascript
var a;
let b;
const c = 20;
c = 10; //TypeError: Assignment to constant variable is not allowed.
```

```javascript
console.log(a); //ReferenceError : cannot access 'a' before initialization
let a = 50;
console.log(a);
```

```javascript
console.log(a); //ReferenceError : a is not defined
var b = 50;
```

```javascript
console.log(a); //ReferenceError : a is not defined
var b = 50
```

```javascript
console.log(a); //ReferenceError : a is not defined
var b = 50;
```


#### Temporal Dead Zone

1. let and const are hoisted but not initialized. This means they are in temporal dead zone from start of the block until they are initialized. This means they cannot be accessed before initialization.

2. JS use different memory rather than GEC to store let and const i.e. script/block (var is stored in GEC) , this is the reason behind temporal dead zone.

3. Temporal dead zone exists from start of the scope until variable is initialized / assigned some value.




## SCOPE AND LEXICAL ENVIRONMENT

Whenever an execution context is created, a lexical environment is also created.

**Lexical Environment is the local memory of a function along with the environment of its parent scope.**

Having the refrence to lexical environment of its parent means the variable can access all variables and functions defined in the memory space of its lexical parent.

Lexical as a term means in hierarchy or in sequence. Scope of a variable is directly dependent on the lexical environment.

**The JS engine first search the variable in its current local memory space, if its not found, it searches the variable in the lexiacal scope of its parent and if still not found, it searches the variable in subsequent lexical environment and this search goes on until variable is found in some lexical environment or lexical environment becomes NULL.**

**The mechanism of searching variables in the subsequent lexical environments is called scope chain.**
_If variable is not found, we say the variable is not present in the scope chain._


```javascript

function a(){
    var x = 10;
    function b(){
        console.log(x);
    }
    b();
}
```

_Here b is lexically inside a and a is lexically inside global scope._
_Lexical environment of b = Local env. of b + lexical env of a(reference to local env. of its parent)_

Lexical environment path 
b() -> local memory of b + lexical environment of a() 
a() -> local memory of a + lexical environment of GEC 
GEC -> local memory of GEC + it's parent i.e. null

_Lexical env of B_
    -Local
    -Closure (A)
    -Global
 
_Lexical env of A_
    -Local
        x: 10
        a : f a()
    -Global


**Example:**

```javascript
var x = 1;

a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}
```

The output will be:

```bash
10
100
1
```

### Block, Scope and Shadowing

Multiple statements compounded in a group enclosed in curly brackets for a block. It is used to group multiple statements together.

JS sometimes expect a single statement, but we need to run multiple commands.

```javascript
if(true) var a = 10;

if(true){
    var a = 20;
    console.log(a);
}
```

1. let and const are block scoped variables. let and var cannot be accessed outside block(let and const are stored in block environment) while var is functional scoped and can be accessed (as var is stored in global object memory space),

```javascript
let x = 10;
function example(){
    let x = 20;
    console.log(x); //     20
}
example();
console.log(x);   //10
```

```javascript
var a = 10;
{
    var a = 20;
}
console.log(a);    //20
// var a is stored in global memory, so a = 20 will override the pre-existing value, while it is not the case with let and const.
```

**Shadowing**: **When variable declared in inner scope has same name as variable name of outer scope. The inner variable shadows the outer scope variable.**

Shadowing is possible with var, let and const.

```javascript
let a = 10;
{
    let a = 20;
    console.log(a);  //20
}
console.log(a);    //10
```

**Illegal Shadowing** : **Shadowing let or const with var or const is not allowed and will throw syntax error**

```javascript
let x = 10;
{
    var x = 20; //SyntaxError: Identifier 'x' has already been declared
}
```



# CLOSURE

**Closure is a combination of function bundled together with its reference to lexical environment.**

**Whenever a function is returned, even if its vanished from execution context but still it remembers the refrence it was pointing to.It is not only that function is returned but the entire closure.**

Closure gives the access to an outer function scope from an inner function.

Closures are stored physically in memory. When a closure is created, the function and lexical environments are stored together in memory so that the function can access these variables even when it is executed outside their original scope.

Closures are created everytime when function is created.

Every function has 3 scopes
    - Local scope (its own scope)
    - Outer functions scope
    - Global Scope

#### Disadvantages of Closure

1. Unused variables are automatically deleted in high level programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted and this act as a disadvantage.
    -However some browsers now have smart garbage collectors that are automaticaaly deleted which are not used outside closures. 

2. Closures capture all variables in the outer function scope, not just ones they need. This leads to unnecessarily retained memory and confusing debugging.

#### Uses of Closure

1.  Creating private functions.
2.  Currying
3.  Module Design Patterns
4.  Memoization
5.  Time Optimization


#### Difference b/w closure and scope

   | Aspect           | Scope                                      | Closure                                    |
   |------------------|-------------------------------------------|-------------------------------------------|
   | **Definition**   | Accessibility of variables in a specific part of the code. | A function that retains access to its lexical scope. |
   | **When Created** | Determined at runtime.                    | Created when a function is defined.       |
   | **Purpose**      | Controls variable visibility.             | Preserves data and state between function calls. |
   | **Example**      | Variable access within a block or function. | Function accessing variables from its outer scope. |

#### Example of Closure

```javascript

function a(){
    var x = 10;
    function b(){
        console.log(x);
    }
    b();
}

a();

```

_In b stack => Closure(a)  x:10_

_Here function b binds with a to form the closure. because it is holding x. So, whenever it will return it will return entire closure._


```javascript

function a(){
    var x = 10;
    return function b(){
        console.log(x);
    }
}

var z = a();
z();

```

_console.log(z) --------> It will print f b() {console.log(x)}_

_console.log(z()) -------> It will print 10_

_So whenever functions are returned they are returned with their lexical scope._


```javascript

function x(){
    var a = 10;
    function y(){
        var b = 20;
        function z(){
            var c = 30;
            console.log(a,b,c);   //debug ------> Local c: 30 Closure(y)  b: 20 Closure(x) a: 10  Global
        }
        z();
    }
    y();
}
x();
```


### Uses of Closure
1. Data Hiding and encapsulation (creating private functions)
2. Time optimization
3. Currying
4. Module Design Patterns
5. Memoization
6. Maintaing state in async world
7. Functions like once

##### Module Patterns

Module Pattern in JavaScript, is a design pattern used to encapsulate private and public members within a function.

Uses:
1.  Encapsulation: Keeps private members hidden and exposes only what is necessary.
2.  Avoids Global Scope Pollution: All variables and functions are scoped within the module.
3.  Reusability: You can create multiple instances of the module if needed.

## Currying

**Currying** is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. 

#### Benefits of Currying

✅ It makes a function pure which makes it expose to less errors and side effects.
✅ It helps in avoiding the same variable again and again.
✅ It is a checking method that checks if you have all the things before you proceed.
✅ It divides one function into multiple functions so that one handles one set of responsibility.

#### Example of Currying:
```javascript
// Normal function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Curried version of the same function
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = curriedAdd(2);
console.log(addTwo(3)); // Output: 5
console.log(curriedAdd(2)(3)); // Output: 5
```

## Objects

Object is a collection of properties and each property is an association between key and value. The property's value can also be function.
Object is created using curly brackets.

```javascript
const emptyObject = {};

const user = {
    name: 'Akash Midha',
    age: 24,
    "like the video": true
};

// Accessing properties
console.log(user.name);   // Akash Midha
console.log(user["like the video"]);

//Modifying properties
user.name = 'Sagar';
console.log(user.name); //Sagar


//deleting properties
delete user.age;   //Age property will be deleted
delete user["like the video"]; //like the video property will be deleted
```

#### Computed property names

```javascript
// Computed property names

const property = "firstName";
const name = "Akash Midha";

const user = {
    [property] : name,
};
console.log(user.firstName);
```

#### Looping through object

```javascript
const user = {
    name: "Akash Midha",
    age: 24,
    city: "Delhi",
    isEmployed: true
}

for(key in user){
    console.log(`key:${key} value:${user[key]}`);
}
```


#### JSON.stringify and JSON.parse

JSON.stringify: Converts a JavaScript object into a JSON string.
JSON.parse: Converts a JSON string back into a JavaScript object.


UseCase: localStorage only stores strings, so you must JSON.stringify() objects before storing and JSON.parse() them when retrieving.

```javascript
const user = {
    name: "Akash",
    age: 24,
}

const strObj = JSON.stringify(user);
console.log(strObj);
localStorage.setItem("test", strObj);
const jsonObj = JSON.parse(localStorage.getItem("test"));
console.log(jsonObj);

```

#### Destructuring of objects

```javascript
const user = {
    name: 'Akash Midha',
    age: 24,
    fullname: {
        firstname: 'Akash',
        lastname: 'Midha'
    }
}

const name = 'Piyush';

const {name : myName, age, fullname : {firstname, lastname}} = user;
console.log(name, myName, age, fullname, firstname, lastname);
```

#### Shallow copy and Deep copy of object

Shallow copy: Copies only the first level of the object — nested objects are shared.
Deep copy: Copies everything, including nested objects — creates completely independent data.

```javascript
const user = {
    name: 'Akash Midha',
    age: 24,
    fullname: {
        firstname: 'Akash',
        lastname: 'Midha'
    }
}

const name = 'Piyush';

const {name : myName, age, fullname : {firstname, lastname}} = user;
console.log(name, myName, age, fullname, firstname, lastname);
```

How to deep copy / clone an object ?

```javascript
let user = {
    name: "Akash Midha",
    age: 24,
}

//method - 1 -> two params, target and to be cloned
const objClone = Object.assign({}, user);

//method - 2 -> stringify and parse

const objClone2 = JSON.parse(JSON.stringify(user));

//method - 3 -> destructuring

const objClone3 = {...user};

```


## FIRST CLASS FUNCTIONS

#### Function Statement / Function Declaration

The normal function which we craete using naming convention and with this we can do hoisting.

```javascript
    function a(){
        console.log('This is function statement.');
    }
```

#### Function Expression 

Functions which are assigned to variable. They act as variables and thus cannot be accessed before definition.

```javascript
    var x = function a(){
        console.log('This is function expression');
    }
```

**The main difference b/w function statement and expression is hoisting, function statements are hoisted while function expressions themselves are not hoisted, their variable is hoisted only and accessing it before definition results in undefined (if assigned as var, and if with let or const result in refernce error due to TDZ.)**

#### Named Function Expression

Function with a name and assigned to variable.

```javascript
    var a = function x(){
        console.log('This function is a');
    }
    a(); // will give output 
    x(); //x is not defined
```

```javascript
    var a = function x(){
        console.log(x);
    }
    a(); // f x(){console.log(x)}
```

#### Anonymous Functions

Function without any name. They are also called lambda functions.

It doesn't have any identity and cannot be used like this:
```javascript
function (){
    console.log('Hi'); 
}
```

It is used where functions can be treated as a value. They are used as a callback function.

eg-

```javascript
setTimeOut(function(){
    console.log('Hi');
}, 1000)
```

#### Parameters and Arguments

Parameters are local variables for that function.

Arguments are the variables which we pass while invoking a function.

```javascript
function sum(a,b){
    console.log(a+b);
}
var x = 2;
var y = 3;
sum(x,y);
// Here x and y are arguments & a and b are parameters.
```

#### Spread and Rest Operator

... syntax is used for both spread and rest operator.

**Spread operator is used to spread the elements of array or object.**
Examples of Spread Operator

```javascript
const arr = [1, 2, 3];
function example(a, b, c, d){
    console.log(a + b + c + d);  // 10 
}
example(...arr, 4);
```

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]
```


```javascript
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

```javascript
console.log([..."Lydia"]);  // ['L', 'y', 'd', 'i', 'a'] 
```

**Rest operator is used to collect remaining elements of array or object.**

```javascript
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

```javascript
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }
```

```javascript
function multiply(a, ...nums){
    console.log(nums);  // [3,4]
    console.log(a * nums[0] * nums[1]); // 24
}
var x = 2;
var y = 3;
var z = 4
multiply(x, y, z);
```

```javascript
function print(a, b, c, ...nums){     // rest operator
    console.log(a, b, c);
    console.log(nums);
}

var arr = [1,2,3,4,5,6];
print(...arr);   //spread operator
```

#### First class Functions

The ability of a function to be treated as a value is the first class functions. In Js, functions are first class citizens.
    - Functions can be passed as argument / parameter.
    - Functions can be returned from another function.

#### Immediately Invoked Function Expressions (IIFE)

IIFE runs as soon as it is defined.

```javascript
(function square(num){
    console.log(num*num);    // 4
}(2));
```


```javascript
(function (x){
    (function (y){
        console.log(x);  // 3
    }(2))
}(3))
```

#### Arrow Functions

Arrow functions are concise syntax for writing functions introduced in ES6.

Implicit return: For single-expression functions, we can omit the return keyword and the curly braces.
Arrow Functions cannot be used as constructors: cannot use new with arrow functions.

```javascript
    // Function declaration

    function square(num){
        return num*num;
    }

    // Function Expression

    const square = function(num){
        return num*num;
    }

    // Arrow Functions

    const square = () => num*num;
```

**Arrow functions do not have their own `this` context. They inherit this from their enclosing lexical scope.**

```javascript
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;  // `this` refers to `shape`
    },
    perimeter: () => 2 * Math.PI * this.radius,  // `this` does NOT refer to `shape` and this.radius here is undefined
};

console.log(shape.diameter());   // 20
console.log(shape.perimeter());  // NaN
```

No arguments object: Arrow functions don’t have their own arguments object. It take the arguments of its lexical scope.

```javascript
    function normal(){
        console.log(...arguments); // 1,2,3
    }
    normal(1,2,3);

    // Function expressions also behave the same as function declaration.

    //Arrow Functions

    function arrow = () => console.log(...arguments); //ReferenceError: arguments is not defined
    arrow(1,2,3);
```





```javascript
const sumAndLog = (a, b) => {
  const sum = a + b;
  console.log(sum);
  return sum;
};
```

#### Callback Functions

Functions which are passed as an argument to another function are called callback functions.


```javascript
function square(num){
    return num*num;
}

function displaysquare(fn){
    console.log("Square is +" fn(5));
}

displaysquare(square);
```


```javascript
setTimeout(function (){
    console.log('a');
}, 1000)

// Callback function is passed inside setTimeout.
```

We can do asynchronous operations only because of callback function which prevent the blocking of main thread.

#### Higher Order Functions

Functions that take another function as an argument or value are called higher order functions.

```javascript
function x(y){
    console.log('x');
    y();
}

x(function(){
    console.log(y);
})
// It is upto x when it is calling y. Here x is higher order function and y is callback function.
```

```bash
x
y
```


```javascript
const radius = [1,2,3];

const calculateCircumference = function (radius){
    return 2 * Math.PI * radius;
}

const calculateArea = function (radius){
    return Math.PI * radius * raius;
}

const calculateDiameter = function(radius){
    return 2 * radius;
}

const calculate = function(logic){
    const output = [];
    for(let i=0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(calculateArea));
```

We can have instead higher order function for this:

```javascript

```

> "Breaking Down: "Khana khane ke baad bartan andar rakh" is like a higher-order function. "Bartan andar rakh" is like the callback function. How It Works: The higher-order function (khana khane ke baad bartan andar rakh) does something (e.g., eating food) and then calls another function when it’s done (bartan andar rakh). The callback function (bartan andar rakh) is the action that gets executed after the main task is completed. In this analogy: Khana khana (eating food) is the main task. Bartan andar rakh (putting the dishes away) is the additional task that happens after, which is like the callback function being executed after the main function is done. So, "bartan andar rakh" is acting like a callback function that gets executed after the main action (eating) is completed."


#### Pure Function

A pure function is a function that adheres to the following two main principles:
    1. Deterministic: The function always produces the same output given the same input.
    2. No Side Effects: The function does not modify any external state or variables. It doesn't change anything outside of the function (e.g., no modifying global variables, no logging to the console, no writing to a file, no updating a database, etc.).

### Map, Filter and Reduce

#### Map

Map method is used to create new array from existing ones, and transformation is done on new array.
Map is a callback function with 3 arguments - currentvalue, index, array.

```javascript
const arr = [1,2,3,4,5];
const multiplyby5 = arr.map((item,i,arr) => (item*5));
console.log(multiplyby5);
// multiplyby5 = [5,10,15,20,25]
```
**Map Polyfill**

```javascript
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0 ; i<this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const arr = [1,2,3,4,5];
const multiplyby5 = arr.myMap((item,i,arr) => (item*5));
console.log(multiplyby5);
```

#### Diff in Map and ForEach

forEach doesn't return new array while map return another array. forEach is used to mutate the original array.

forEach takes a callback function with 3 arguments - currentvalue, item, aray.

We can chain in map as it returns another array but chaning can't be done on forEach.

```javascript
const arr = [1,2,3,4,5];
const forEachArray = arr.forEach((item,i,arr)=>(arr[i] = item*5));
consol.log(forEachArray); 
// original array mutated but not returned any new array.
//arr = [5,10,15,20,25]
//forEachArray = undefined
```

#### Filter 

Filter method is used to filter elements based on some condition and return new array containing elements that satisy that condition.

Filter method takes callback function with 3 arguments - currentelement, index and array.

```javascript
const arr = [1,2,3,4,5];
const elementsLessThanThree = arr.filter((item,i,arr) => (item<3));
console.log(elementsLessThanThree);
// elementsLessThanThree = [1,2]
```
**Filter Polyfill**

```javascript
Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0 ; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const arr = [1,2,3,4,5];
const elementsLessThanThree = arr.myFilter((item,i,nums) => (item<3));
console.log(elementsLessThanThree);
// elementsLessThanThree = [1,2]
```

#### Reduce

Reduce method is used to reduce the value of array to single value.
Reduce takes a callback function and initialvalue for the accumulator.

```javascript
const nums = [1,2,3,4,5];

const sum = nums.reduce((acc, curr, i, arr) => (acc = acc+curr), 0);
console.log(sum); //15
```

**Reduce polyfill**

```javascript
Array.prototype.myReduce = function(cb, initialvalue){
    let accumulator = initialvalue !== undefined ? initialvalue : this[0];
    let sI =  initialvalue !== undefined ? 0 : 1;
    for(let i=sI; i<this.length; i++){
        accumulator = cb(accumulator, this[i],i,this);
    }
    return accumulator;
}
```



### setTimeout

```javascript
for(var i=1; i<=5; i++){
    setTimeOut(()=>{
        console.log(i);
    }, 1000);
}

// 6 will be printed 5 times because i is pointing to the same refernce and will be equal to 6 at the time of printing
```

```javascript
for(let i=1; i<=5; i++){
    setTimeOut(()=>{
        console.log(i);
    }, 1000);
}

// Output - 1 2 3 4 5
//  because i is pointing to the different refernces.
```

```javascript
for(var i=1; i<=5; i++){
    function close(x){
        setTimeOut(()=>{
            console.log(x);
        })
    }
    close(i);
}

// Output - 1 2 3 4 5
// We had now created a closure and now x everytime forms a different copy of i.
```

The callback in setTimeout is pushed to callback queue and is only executed if call stack is empty even if setTimeout time is 0s.


Ques. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
Ans. No, the callback function needs to wait until the call stack is empty. So the 0 ms callback might have to wait for sometime also if the stack is busy. 


```javascript
console.log('start');  // Logs 'start'

// Set up a timeout to log 'after 5 sec' after 5 seconds
setTimeout(() => {
  console.log('after 5 sec');  // Logs 'after 5 sec' after 5 seconds
}, 5000);
// Blocking the main thread for 10 seconds (synchronous, CPU-intensive operation)
const startTime = Date.now();
while (Date.now() - startTime < 10000) {
  // Keep the thread busy for 10 seconds
}
console.log('end');  /
```

```bash
start
end
after 5 sec
```


### setInterval

```javascript
var count = 0;
const intervalId = setInterval(()=>{
    count++;
    console.log(`This is call number ${count}`);

    if(count === 5){
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);
```

```bash
This is call number 1
This is call number 2
This is call number 3
This is call number 4
This is call number 5 
Interval stopped

```

# JAVASCRIPT RUNTIME ENVIRONMENT 

JS runtime environment contains all elements required to run JS. It includes:
    - JS engine
    - Callback queue
    - Microtask queue
    - Event loop
    - set of APIs to connect to outer environment such as:
        a.) **localStorage** - to access the local localStorage
        b.) **console.log** - to print in outer/ console
        c.) setTimeout

        _These APIs have different implementation in different runtime environments._


JS runtime environment can run everywhere - in browsers/ servers/ robots. NodeJS is open-source runtime environment.

JS engine is a piece of code itself. Some examples are:
        • google/chrome/nodejs - v8 ---> google v8 fastest JS engine (written in c++ )
        • Firefox - SpiderMonkey -> First JS engine
        • MS edge / Internet Explorer- Chakra
        • Oracle JDK - Nashorn


## JS engine

1. JS engine takes human readable code as input and undergoes through 3 processes - Parsing, Compilation and Execution

2. Parsing: There is syntax parser which converts code into token and converts to AST (Abstract Syntax Tree). eg: let a = 10 is broken down into 4 tokens. (Explore ASTs using [AST Explorer](https://astexplorer.net).)

3. Modern JS engine follows JIT (Just In Time) compilation, it interprets while it optimizes code as much as it can.

4. Execution and Compilation are done together. So JS can behave as an interpreted language as well as a compiled language depending on the JS engine. Initially, it was created as an interpreted language.

   - An interpreter translates and executes code line by line, while a compiler translates the entire code into machine code before execution.
   - In JavaScript, it is primarily interpreted.

   In compiled languages, we have more efficiency, but for interpreted languages, it is faster as it doesn't have to wait to compile the whole code into machine code.

   - However, modern JavaScript engines like V8 (in Chrome) use Just-In-Time (JIT) compilation to improve performance by compiling code into machine code during runtime. So, JS combines both techniques for optimal performance.

   -> Now, parsed code goes through an interpreter/compiler which converts it into byte code/machine code.

Execution: Memory Heap, Call Stack, and Garbage Collection.

   -> Memory heap is also there in the JS engine. It is the space where all functions and variables are assigned memory.

8. Execution has a Garbage Collector. It tries to free memory space whenever possible. It uses the Mark and Sweep algorithm.

9. There are many other optimization techniques such as inlining, copy elision, inline caching, etc., which the compiler does for code.

10. Basic idea about Mark & Sweep Algorithm. It comprises 2 phases:

    1. **Mark phase**  
    2. **Sweep phase**

    All objects are marked as 0 initially (at creation), and in the mark phase, the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal. During the sweep phase, the objects marked with 0 are removed from heap memory. Also, all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.


#### Different compilation optimizations in JavaScript

Key compiler optimizations include:
    1. Inlining: Replacing function calls with the function code to reduce overhead.
    2. Copy Elision: Eliminating unnecessary copying of objects, particularly in situations like returning objects from functions.
    3. Inline Caching: Storing the result of an operation (like property lookup) after the first execution, so future lookups are faster by avoiding redundant work. Often used in dynamic languages to optimize property or method access.
    4. Dead Code Elimination: Removing unused or unreachable code.
    5. Constant Folding: Evaluating constant expressions at compile time.
    6. Loop Unrolling: Reducing loop overhead by expanding loops.
    7. Register Allocation: Efficiently using CPU registers to speed up access.
    8. Common Subexpression Elimination: Reusing repeated calculations.
    9. Peephole Optimization: Simplifying small sections of code for better performance.
    10. Instruction Scheduling: Reordering instructions to avoid CPU delays.

#### Difference b/w JIT and AOT compilation
    
JIT (Just-In-Time) Compilation and AOT (Ahead-Of-Time) Compilation are both methods of compiling code, but they differ in when and how the compilation happens:
    • JIT Compilation:
        ○ When: Compilation occurs at runtime.
        ○ How: Code is compiled into machine code just before it's executed, which can optimize performance based on actual usage patterns.
        ○ Example: JavaScript engines like V8 (in Chrome) use JIT compilation.
    • AOT Compilation:
        ○ When: Compilation occurs before runtime (at build time).
        ○ How: Code is fully compiled into machine code ahead of time, making the execution faster since it’s already optimized.
        ○ Example: Languages like Java or C++ typically use AOT compilation.
        
    **JIT compiles code at runtime, while AOT compiles code before runtime.**

#### V8 engine

• The name of V8 interpretter is ignition and turbofan is optimizing compiler of v8.
• Garbage collector of V8 is orinoco which uses M & S algorithm.

# ASYNCHRONOUS JAVASCRIPT AND EVENT LOOP

Event loop is a mechanism in Javascript to handle asynchronous operations despite JS being synchronous single-threaded language. JS can can handle async operations with the help of callback functions, promises and async-await. While JS itself is synchronous it offloads time taking tasks such as fetching data, handling i/o operations, reading file to event loop. This allows rest of the code keep running without waiting for these tasks to finish. Once task is done, event loop picks the callback from callback queue and executes the callback or promise resolution, effectively handling tasks without blocking the main thread.

Event loop is a mechanism in JS to handle asynchronous operations. It constantly checks the call stack. If it's empty , it pushes the callback to be executed from callback queue (or microtask queue) to call stack.

### Stes of Execution - How JS code is executed?

1. Creation of execution context - Each function call creates a new execution context, containing the code to execute and the variable scope.

2. Call stack keep track of execution of thread of execution which are executed seuentially. Once the execution is done, that EC is popped out from the stack.

3. Web APIs such as setTimeOut handle asynchronous operations.

4. Event loop picks the task from microtask queue or callback queue if callstack is empty and executes the asynchronous tasks.

#### Callback queue

Whenever any asynchronous task is done (such as DOM events, HTTP requests,timers), its callback to be executed is placed in callback queue.

#### Microtask queue / Priority queue

Microtask queue holds the asynchronous task which are ready to be executed but has higher priority such as promises, mutation observers.

#### Mutation observers

It is JavaScript API that watches for changes in DOM / DOM manipulation (addition,updation or removal of DOM elements). It allows developers to react to changes in real-time without constant polling DOM.

#### Starvation

Starvation ocuurs when a task is perpetually delayed because higher priority taks takes precedence.

Microtasks are given priority over callback queue tasks. Too many microtasks can cause starvation (not giving time to callback queue tasks to execute)


#### Ques/Ans

Q1. When does the event loop actually start?
Ans. Event loop is a single-thread, loop that is `almost infinite`. It's always running and doing its job.

Q2. Are only asynchronous web API callbacks are registered in web API environment?
Ans. Yes, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this. 

Q3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? 
Ans. Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

Q4. How eventlistener execution is done?
```javascript
console.log('start');
document.getElementById('btn').addEventListener('click', () => {
  console.log('clicked');
});
console.log('end');
```

Ans. -  First GEC is created, and synchronous code is executed immediately. start and end will be printed first. 
     -  addEvenListener('click', callback) registers click event listener for btn element. Web API memory stores the event listener and waits for click event
     -  When user click on button, Web Api detects event and move the callback to callback queue
     -  Event Loop checks if call stack is empty, it moves the callback to be executed from callback queue to call stack.
     -  After execution, its execution context is removed from call stack, but event listener stays in memory, waiting for future event unless removeEventListener is manually removed or the page is unloaded.

Q5. How callback in setTimeOut and fetch is executed?

```javascript
console.log('start');
setTimeout(() => { console.log('timer'); }, 0);
fetch('https://example.com')
  .then(response => response.json())
  .then(data => console.log('call'));
console.log('end');
```

Ans.-   First GEC is created, and synchronous code is executed immediately. start and end will be printed first.
    -   The callback function from setTimeout is stored in the Web API (specifically in the timer part of the Web APIs) when the setTimeout function is called.
    -   The Web API handles the countdown for the specified delay (e.g., 0ms in your case). It is not yet in the callback queue; it stays in the Web API's timer system.
    -   The .then() or .catch() handlers attached to a fetch request are stored in the Web API (specifically in the Promise or Fetch API part of the Web APIs).
    -   The Web API handles the network request and tracks its resolution.
    -   After the specified delay has passed, the Web API moves the callback to the callback queue (task queue), but it doesn't execute until the event loop sees that the call stack is empty.
    -   Once the fetch request completes (whether it succeeds or fails), the Web API moves the promise handlers (e.g., .then() or .catch()) to the microtask queue.
    -   These handlers will not execute until after the call stack is empty, and after any already-pending microtasks are processed.
    -   First, microtask queue task will be resolved and then callback queue task.

    Final Output:

    ```bash
    start
    end
    call
    timer
    ```

Q6.  If console a web API , then how console.log is synchronous ?

Ans. Although console is part of the Web API in JavaScript, console.log() is synchronous because it directly interacts with the browser's console to log output immediately. It doesn't involve any asynchronous operations or require a callback, so it executes in the call stack immediately and doesn’t rely on the event loop or callback queue.

Q7. How if else statement executes if js executes everything line by line ?

Ans. JavaScript still executes everything line by line, but it uses conditions to decide which block of code to execute next, either the if block or the else block. This control flow doesn't disrupt the sequential nature of execution, it just adds a conditional path for which line of code gets executed next.

Q8.  For the code below, when the timer starts , line 2 of settimeout or at the starting of code ?

```javascript
console.log('start');  // Logs 'start'

setTimeout(function() {
  console.log('callback - console("timeout")');  // Logs 'callback - console("timeout")' after 5 seconds
}, 5000);

console.log('end');  // Logs 'end' immediately
```

Ans. The timer for setTimeout() starts when the setTimeout() function is called (which is when JavaScript reaches line 2 in code), not at the beginning of the script.


Q9.  Why we need callback queue , why cant we directly push into call stack from web API environment ?

Ans. The callback queue is needed to prevent blocking the call stack. Directly pushing tasks from the Web API to the call stack would block synchronous code execution. The callback queue allows asynchronous tasks to wait until the call stack is empty, ensuring non-blocking execution and proper task prioritization by the event loop.

Q10.  Is console web api?

Ans. Yes, the console object is part of the Web API in JavaScript. It provides a simple interface to interact with the browser's developer console. The console object allows developers to log information, warnings, errors, and more, which is particularly useful for debugging and testing purposes.
Some commonly used console methods include:
    • console.log() – Used to log general information.
    • console.error() – Used to log error messages.
    • console.warn() – Used to log warnings.
    • console.info() – Used to log informational messages.
    • console.debug() – Used to log debug-level messages.
    • console.table() – Used to display tabular data in a table format.
These methods are supported by most modern web browsers and are part of the browser's JavaScript environment, making it a key component of the Web API for developers.



# CALLBACK HELL AND INVERSION OF CONTROL

    • Synchronous code = Wait for each task to finish (executes line-by-line).
    • Asynchronous code = Don't wait, move on to the next task while the current one is being processed.

    ○ JavaScript always executes synchronous code first and then asynchronous.

Callback function enables us to do async programming in JS. We use it for functions that are interdependent on each other for execution.

### Callback Hell

When a function is passed as an argument to another function, it is a callback function. When multiple callbacks are nested within each other, the code becomes hard to read, maintain, and debug (also called "callback hell" or "pyramid of doom").

### Inversion of control

The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. That process is called inversion of control.

```javascript
const cart = ["shoes", "pants", "kurta"];

createOrder(cart , function() {
    proceedToPayment(orderId);
});
```

#### What are the issues?

What might createOrder will never call our callback function proceedToPayment() ? What if it call it twice ? …and so on, we can't blindly trust that api. We are giving the control our code to another which we are not aware of even sometimes. It's very risy and not reliable.
 

# PROMISES

### Need for Promises

The need for Promises arise from the challenges of handling asynchronous operations.

Callback were traditionally used to handle asynchronous operations.
Key Problems with callbacks were: Callback hell and inversion of control.

Promise overcome with these drawbacks:

    1. Callback Hell (Pyramid of doom) : By chaining promises(using .then), we can get rid of callback hell. With promise chaining our code expands vertically and not horizontally.
    
    2. Inversion of control : When we call a promise, we don’t have to pass in a callback; instead, we can chain .then() and .catch() methods, which makes it easier to control the flow of the code. Also, Promises are immutable, so they can't be altered.

How Promises help? 
    - Avoid callback hell & inversion control
    - Clean code
    - Unified mechanism for handling errors

```javascript
// using callback 

createOrder(cart, function(){
    proceedtoPayment(orderId);
});

// using promises

createOrder(cart)
.then(function(){
return proceedToPayment(orderId);
})
```

Using callback, we were passing our function as a callback function to another function and giving our control to that higher order function but now we are attaching the callback function to promise.

Now, createOrder API will only do its job and initially promise data will be undefined until promise is pending and whenever promise gets fulfilled with data, it will automatically call the function attached to it. Promise gives the guarantee to call that function whenever it get the data and that also only once.

### What is Promise

A promise is an object that represents the eventual completion or failure of an asynchronous operation.

It is basically a placeholder for a certain period of time for an asynchronous function.

Promise has 3 states - pending, fulfilled, rejected.

As soon as promise is fulfilled/rejected, it updates the empty object PromiseResult of promise which is assigned undefined in pending and PromiseState is updated to fulfilled or rejected.

```javascript
const GITHUB_API = "https://api.github.com/users/akash-midha"
const user = fetch(GITHUB_API);

// fetch returns a promise which is stored in user.
```

### Promise chaining

Promise chaining is a technique where multiple .then() methods are linked together to perform a sequence of asynchronous operations.

Each .then() returns a new promise, allowing to perform asynchronous actions in a linear, readable flow without nesting callbacks.

## Promise Combinators

Promise combinators are utility methods that help handle multiple promises simultaneously. They return a single promise that behaves based on the input promises' resolution or rejection.

### Promise.all
- Resolves when **all promises resolve**.
- Rejects if **any one promise rejects**.
- Returns an array of resolved values in the same order.

### Promise.allSettled
- Resolves when all promises settle (either resolve or reject).
- Returns an array of objects with { status, value } or { status, reason }.
- never reject

### Promise.race
- Settles as soon as any promise settles (either resolves or rejects).
- If first promise fulfill promise.race fulfill, if it is rejecte , promise.race is rejected
- Returns the value or reason from the first settled promise.

| Combinator           | Resolves When  | Rejects When      | Returns                                  |
| -------------------- | -------------- | ----------------- | ---------------------------------------- |
| `Promise.all`        | All resolved   | Any one rejected  | Array of resolved values                 |
| `Promise.allSettled` | All settled    | Never             | Array of `{ status, value/reason }`      |
| `Promise.race`       | First settled  | First is rejected | Value or reason of first settled         |
| `Promise.any`        | First resolved | All rejected      | First resolved value or `AggregateError` |





# EVENT PROPAGATION

Event propagation refers to the process by which events are handled by the DOM.

There are 3 phases in event propagation.

### Capturing Phase

1. This phase begins at the top of DOM tree and travel downwards through ancestors of target element.
2. Event Listeners registered in capturing phase handle event before it reaches the target element.
3. Event capturing is also known as event trickling.

### Target Phase

1. This phase occurs when the event reaches the target element itself. At this point, event is being handled by element that was the actual recipient of event.

### Bubbling phase

1. This phase happens after the event reaches the target element.
2. In event phase, the event bubbles up the DOM from target element to the root (document or window).
3. Event listeners registered in bubble phase will handle the event as it bubbles back up through its acestors.
4. By default, we have event bubbling, but we can set it as event capturing by setting it to true.
5. Focus, Blur are few events which do not bubble.

**3-phase model:**
Capture Phase → DOM tree top → down to the target
Target Phase → Event hits the actual target element
Bubble Phase → Event bubbles up from target to root

### How to stop event capturing or bubbling?

by setting e.stopPropagation() to the event where we want to stop.


## Event Delegation

Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding individual event listeners to each child element.

#### Benefits

 • Efficiency: Instead of attaching event listeners to many child elements (which can be resource-intensive), you attach just one to a common parent, reducing memory usage and improving performance.

 • Dynamic Content: It works well for dynamically added elements. Even if new child elements are added later, they will automatically be covered by the parent's event listener.

```html
<ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
    
```javascript
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});
```

### event.currentTarget vs this vs event.target

| Property             | Refers To                              | Common Use Case                                               |
|----------------------|-----------------------------------------|----------------------------------------------------------------|
| `event.target`        | The element that was **clicked**         | Knowing what **triggered** the event                           |
| `event.currentTarget` | The element the **handler is bound to** | Knowing where the **event listener was attached**              |
| `this` (in function)  | Same as `event.currentTarget`           | Accessing the current element inside a **normal function**     |


# DEBOUNCING AND THROTTLING

## Debouncing

1.  Debouncing ensures that function is called only once after a cerain period of time has passed since the last call, even if it is triggered multiple times in succession.

2.  It's useful when we want to limit the number of times an event handler runs, such as limiting API calls while user is typing or resizing the window.

3. Example: In search input field, we want to send request only when user stope typing for 300-400ms instead of every typestroke.


## Throttling

1. Throttling ensures that function is called at regular intervals , no matter how frequently it is triggered.

2. Example- in scroll event, we want to execute function once every 100ms even if user is continuously scrollling.

# JavaScript Arrays: Holey vs Continuous & Element Types

JavaScript arrays are flexible but their performance is deeply tied to **structure** (holey vs continuous) and **element type** (SMI, Double, Object). JavaScript engines like V8 use different internal representations based on these factors, which affects speed and memory usage.

---

## 🔹 Array Structure Types

### 1. Continuous Array
- No missing elements.
- Optimized for performance.
- Internally packed tightly in memory.

**Example:**
```js
const arr = [1, 2, 3, 4]; // Continuous
```

### 2. Holey Array
- Has missing (empty) slots—also called holes.
- Disables some engine optimizations.
- Introduced by skipping elements, using delete, or assigning beyond current length without filling gaps.

**Example:**
```js
const arr = [1, , 3]; // Hole at index 1
```

#### How holes do occur?

```js
// Skipping elements in array literal:
const arr = [1, , 2];


// Using delete on array index:
const arr = [1, 2, 3];
delete arr[1]; // arr becomes [1, <empty>, 3]


// Assigning value at an index far beyond the current length:
const arr = [1];
arr[100] = 5; // holes between 1 and 100

// Initialization
const arr = new Array(3); // this is holey array 
const arr = []; //continuous array
```

## Element Types in Array

| Type             | Description                    | Example            |
| ---------------- | ------------------------------ | ------------------ |
| **SMI**          | Small integers (32-bit signed) | `[1, 2, 3]`        |
| **Double**       | Floating-point numbers         | `[1.1, 2.5, 3.0]`  |
| **Object/Mixed** | Strings, objects, mixed types  | `[1, "a", {x: 1}]` |


### Combined Performance Matrix

| Array Type          | Example          | Performance | Notes                             |
| ------------------- | ---------------- | ----------- | --------------------------------- |
| Continuous + SMI    | `[1, 2, 3]`      | ✅ Fast      | Most optimized case               |
| Continuous + Double | `[1.1, 2.2]`     | ✅ Fast      | Slightly less than SMI            |
| Continuous + Object | `[1, "a", {}]`   | ⚠️ Medium   | Optimized less due to mixed types |
| Holey + SMI         | `[1, , 3]`       | ❌ Slow      | Holes prevent fast access         |
| Holey + Double      | `[1.1, , 3.3]`   | ❌ Slow      | Holes + double = worst case       |
| Holey + Object      | `["a", , {x:1}]` | ❌ Slow      | Mixed types + holes = poor perf   |







