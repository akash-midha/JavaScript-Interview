
// ------------------------------------------Question-------------------------------------------
// map => multiply each num by 5 and add index and add first-element


const arr1 = [1, 2, 3, 4, 5];
const ans1 = arr1.map((num, i, arr) => (num * 5 + i + arr[0]));
console.log(ans1);


// ------------------------------------------Question-------------------------------------------
// filter => Retuen the elements less than 3


const arr2 = [1, 2, 3, 4, 5];
const ans2 = arr2.filter((num, i, arr)=>(num<3));
console.log(ans2);

// ------------------------------------------------------------------------------------------

const arr3 = [1, 2, 3, 4, 5];
const ans3 = arr3.filter((num, i, arr)=>(arr[i]==3));
console.log(ans3);


// ------------------------------------------Question-------------------------------------------
// reduce

const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((acc, curr, i, arr) => (acc = acc + curr), 0)
console.log(sum);


// ------------------------------------------Question-------------------------------------------
// map vs ForEach

// map returns an array but forEach doesn't returns any array so console will give undefined.
// forEach modifies the original array
// we can chain in map but can't do anything such in forEach


const arr5 = [1, 2, 3, 4, 5];
console.log(arr5);

const ans_map = arr5.map((num) => (num + 1));
const ans_forEach = arr5.forEach((num) => (num + 2));

console.log(ans_map);
console.log(ans_forEach);
console.log(arr5);


// ------------------------------------------Question-------------------------------------------
// How forEach can be used to mutate original array ?

let arr6 = [1, 2, 3];
arr6.forEach((num, index, array) => (array[index] = num + 2));

console.log(arr2); // Output: [3, 4, 5]

