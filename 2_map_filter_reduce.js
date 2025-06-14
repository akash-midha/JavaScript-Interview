
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



// ------------------------------------------Question-------------------------------------------
// 1. Return names of all students in uppercase using for & map.
// 2. return details of all students who scored more than 60.
// 3. return details of all students who scored more than 60 and roll no > 15
// 4. Find sum of marks
// 5. return only names of students who scored more than 60.
// 6. return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60


let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// 1. with using for loop ,

let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase())
}
console.log(names);

//using map
const namesUsingMap = students.map((item) => (item.name.toUpperCase()));
console.log(namesUsingMap);

//2
const studentsWithMoreThan60 = students.filter((item) => (item.marks>60));
console.log(studentsWithMoreThan60);

//3
const moreThan80androll60 = students.filter((item) => (item.marks > 60 && item.rollNumber > 15))
console.log(moreThan80androll60);

//4
const sumOfMarks = students.reduce((marks, curr) => (marks = marks + curr.marks), 0);
console.log(sumOfMarks);

//5
const namesOfStudentsMoreThan60 = students.filter((item) => (item.marks > 60)).map((val) => (val.name));
console.log(namesOfStudentsMoreThan60);


//6
const totalMarks = students.map((stu) => {
    if (stu.marks < 60) {
        stu.marks = stu.marks + 20
    }
    return stu;
})
    .filter((stu) => (stu.marks > 60))
    .reduce((marks, stu) => (marks = marks + stu.marks), 0);

console.log(totalMarks);