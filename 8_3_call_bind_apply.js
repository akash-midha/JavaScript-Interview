// ------------------------------Ques 1 Append an array to another array-----------------------------

const array = ["a", "b"];
const elements = [0, 1, 2];

//using concat -> contact return us a new array
const ans1 = array.concat(...elements);

//using for loop
for (let i = 0; i < elements.length; i++) {
    array.push(elements[i]);
}

//using push (with apply)
array.push.apply(array, elements);

array.push.call(array, ...elements);


// ------------------------------Ques 2 Find max value in array-----------------------------

const numbers = [5, 6, 2, 3, 7];
console.log(Math.max(...numbers));
Math.max.apply(null, numbers);

