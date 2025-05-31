# JavaScript-Interview
This repository includes JavaScript interview questions and preparation.


## Scope and Lexical Environment

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


## Closure

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

_Here function b binds with a to form the closure. because it is holding x. So, whenever it will return it will return entire closure.


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



