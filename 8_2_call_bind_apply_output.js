//  ----------------------------------------Output Ques--------------------------------------------

const person = {
    name: "Akash"
};

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24)); // Akash is 24
console.log(sayHi.bind(person, 24)); // f sayHi(age) {return `${this.name} is ${age}`; }


//  ----------------------------------------Output Ques--------------------------------------------

const age = 10;

var person1 = {
    name: "Akash",
    age: 20,
    getAge: function () {
        return this.age;
    }
};

var person2 = { age: 24 };
person1.getAge.call(person2);  // 24
// person1.age()  --------> This will point to person1 obj but after call metod , this is explicitly bind to person2


//  ----------------------------------------Output Ques--------------------------------------------

var status = "😎";

setTimeout(() => {
    const status = "😍";

    const data = {
        status: "🥑",
        getStatus() {
            return this.status;
        }
    };

    console.log(data.getStatus());  // 🥑
    console.log(data.getStatus.call(this)); //here this will point to context of our function which is global this so -> 😎
}, 0);


//  ----------------------------------------Output Ques - TRY AGAIN--------------------------------------------

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" }
];

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + " :" + this.name);
    };
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}

//  ----------------------------------------Output Ques TRY AGAIN--------------------------------------------

function f() {
    console.log(this);
}

let user = {
    g: f.bind(null),
}

user.g();


// Ans - window object 


//  ----------------------------------------Output Ques Bind chaining--------------------------------------------

function fn() {
    console.log(this.name);
}

fn = fn.bind({ name: "Johny" }).bind({ name: "Anny" });
fn();

// Function is already bound to Johny obj and can't be rebound, so it will print Johny
//  Bind chaining don;t exist.

//  ----------------------------------------Output Ques Bind chaining--------------------------------------------





