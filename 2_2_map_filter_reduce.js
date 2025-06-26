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
const studentsWithMoreThan60 = students.filter((item) => (item.marks > 60));
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