// What is object?

// An object is collection of properties and property is an association between key and value. The property's value can also be a function. Object is created by using curly brackets.




// ------------------------------------------------------------Ques-----------------------------------------------------------------
// Find output

const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func);

//Here we will return 5 and 5 will be printed
// delete doesn't affect any local variable and is used to delete the property of an object and not the local variables.



// ------------------------------------------------------------Ques-----------------------------------------------------------------
// Find output

const obj = {
    a: "one",
    b: "two",
    a: "three",
};

console.log(obj);

/*
{
    a: "three",
    b: "two",
}
*/

//Key will have the latest value with initial positioning



// ------------------------------------------------------------Ques-----------------------------------------------------------------
// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};


//Answer

const multiplyByTwo = (obj) => {
    for (key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] = 2 * obj[key];
        }
    }
}

multiplyByTwo(nums);
console.log(nums);


// ------------------------------------------------------------IMPORTANT Ques-------------------------------------------------------
// Find output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b])   //456

// b and c will be converted to key , but object can't be key unless it is string so b aanc will have the same value of key [object Object]

// so a["[object Object]"] = 123 and a["[object Object]"] = 456
// ans -> a[b] = 456


// ------------------------------------------------------------IMPORTANT Ques-------------------------------------------------------
// Find output

const user = {name: "Lydia", age: 21};
const admin = {admin: true, ...user};

console.log(admin);

//Answer

/*
{
admin: true
name: "Lydia"
age: 21
}
*/

// ------------------------------------------------------------IMPORTANT Ques-------------------------------------------------------
// Find output

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

//Answer
// we had provided keys in array as an argument to JSON.stringify so, only leval and health will be stringified.

/*
{"level" : 19, "health": 90}
*/
