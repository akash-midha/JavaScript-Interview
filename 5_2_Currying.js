// --------------------------------------------Ques-------------------------------------------
// Implement curry - Convert function f(a,b,c) to f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }
        else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

function curry(func){

}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(`Currying Function to convert f(a,b,c) into f(a)(b)(c) - totalSum ${totalSum(1)(2)(3)}`);


function currying(func){
    return function curriedFunction(...args){
        if(args.length >= func.length){
            return func(...args);
        }
        else{
            return func
        }
    }
}



/*
| Call            | Accumulated Args | Enough? | Action                |
| --------------- | ---------------- | ------- | --------------------- |
| `curriedAdd(1)` | `[1]`            | ❌       | Return function       |
| `. . . (2)`     | `[1, 2]`         | ❌       | Return function       |
| `. . . (3)`     | `[1, 2, 3]`      | ✅       | Call `add(1,2,3) → 6` |



curriedAdd(1)
args = [1]
func.length = 3 (since add(a, b, c) has 3 parameters)
args.length < func.length → So return a function waiting for more arguments.
Now we have a closure that holds [1].


curriedAdd(1)(2)
args = [1] (from previous step), next = [2]
curried(...args, ...next) → curried(1, 2)
args = [1, 2] → still not enough → return another function.
Now the closure holds [1, 2].


curriedAdd(1)(2)(3)
args = [1, 2], next = [3]
curried(...args, ...next) → curried(1, 2, 3)
args = [1, 2, 3] → Now args.length == func.length → call add(1, 2, 3) → returns 6

*/