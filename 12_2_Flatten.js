// Flatten array - [[1,2],3,[[4]]]

// using flat (infinity)

const arr = [[1, 2], 3, [[4]]];
const ans = arr.flat(Infinity);


// using flatten function (Recursive)

function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
}


// can also be implemented using stack