## What is the difference between null, undefined, and NaN in JavaScript?

undefined:
Meaning: A variable that has been declared but not assigned a value yet.
Set by: JavaScript automatically.

null:
Meaning: An intentional absence of any object value.
Set by: Developer manually.

NaN ("Not a Number"):
Meaning: The result of an invalid or undefined numerical operation.
Type: Surprisingly, typeof NaN is "number".


const obj = {
    name: 'Akash',
    city: 'Delhi'
}

const shallowCopy = obj;

const deepCopy1 = {...obj};

const deepcopy2 = Object.assign({}, obj);