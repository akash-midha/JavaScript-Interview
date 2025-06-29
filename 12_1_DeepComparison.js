const a = { a: 1 };
const b = { a: 1 };

// How to compare a and b?

console.log(a === b); // false because a and b are different objects

// using JSON.stringify
console.log(JSON.stringify(a) === JSON.stringify(b));
// not safe for different key order, functions and circular references.


// using lodash

// import _ from 'lodash';
// console.log(._isEqual(a,b));


// deep comparator function


function deepEqual(a, b) {
    if (a === b) return true;

    if (typeof a != 'object' || a == null || typeof b != 'object' || b == null) {
        return false;
    }

    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}


let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1.push(4);
arr1[1] = 10;

console.log(arr2);

arr1 = null;
console.log(arr2);