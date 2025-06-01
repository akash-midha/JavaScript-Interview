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

Thus, a closure occurs when a function retains access to variables from its outer function even after the outer function has finished executing.

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



