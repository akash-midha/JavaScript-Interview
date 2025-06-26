// ChatGPT ques

// Ques1. Use .map() to convert this array into an array of numbers.

const nums = ["1", "2", "3", "4"];

const method1 = nums.map((item) => item - '0');
const method2 = nums.map((item) => Number(item));
const method3 = nums.map((item) => parseInt(item));
const method4 = nums.map((item) => +item);


// Ques2. Using only .filter(), return an array that contains only the "truthy" string values (i.e., only strings which are truthy — ignore numbers, booleans, nulls, etc.).

const values = [0, "apple", false, NaN, undefined, null, "banana", 42];

const ans2 = values.filter((item) => (typeof item === 'string' && item));


// Ques3. generate a frequency map — an object where the keys are fruit names and the values are the count of times each fruit appears.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequencyUsingReduce = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {})


// Ques 4. Using .reduce(), transform this into an object grouped by city, like this:

const people = [
    { name: "Alice", city: "Delhi" },
    { name: "Bob", city: "Mumbai" },
    { name: "Charlie", city: "Delhi" },
    { name: "David", city: "Bangalore" },
    { name: "Eve", city: "Mumbai" }
];

const groupingWithReduce = people.reduce((acc, item) => {
    const { name, city } = item;

    if (!acc[city]) {
        acc[city] = [];
    }

    acc[city].push(name);
    return acc;

}, {});



// Ques. 5 return an array of names of people who are 18 or older, in uppercase.

const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 }
];

const ansData = data.filter((item) => item.age >= 18).map((item) => item.name.toUpperCase())


// Ques 6. return an array of all unique skills, sorted alphabetically.

const users = [
    {
        name: "Alice",
        skills: ["JS", "React"]
    },
    {
        name: "Bob",
        skills: ["Java", "Spring"]
    },
    {
        name: "Charlie",
        skills: ["JS", "Node"]
    }
];

// using reduce

const uniqueSkills = users.reduce((acc, item) => {
    const { skills } = item;
    for (let i = 0; i < item.skills.length; i++) {
        if (!acc.includes(item.skills[i])) {
            acc.push(item.skills[i]);
        }
    }
    return acc;
}, []);

uniqueSkills.sort();


// using set

const uniqueSkillsUsingSet = [...new Set(users.flatMap(user => user.skills))].sort();


// Ques 7. return the names of students who are enrolled only in "Math" — and no other subject.

const students = [
    { name: "Alice", subjects: ["Math", "Science"] },
    { name: "Bob", subjects: ["Math", "English"] },
    { name: "Charlie", subjects: ["Math"] },
    { name: "David", subjects: ["Science", "History"] }
];

const MathStudent = students.filter((item) => (
    item.subjects.length == 1 && item.subjects[0] == 'Math')
    // item.subjects.length == 1 && item.subjects.includes('Math)
    // JSON.stringify(item.subjects) === '["Math"]'
).map((item) => item.name);


// Ques 8. return an array of unique items that appear in more than one order, sorted alphabetically. [apple, banana, orange]

const orders = [
    { id: 1, items: ["apple", "banana"] },
    { id: 2, items: ["banana", "orange"] },
    { id: 3, items: ["apple", "orange", "banana"] },
    { id: 4, items: ["grapes"] }
];

orders.reduce((acc, order) => {
    const {items} = order;
    
}, []);






