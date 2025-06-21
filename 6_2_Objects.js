// ------------------------------------------Ques IMPORTANT----------------------------------------------------------------
// Find output

const shape =  {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * MATH.PI * this.radius,
}

console.log(shape.diameter());  // this will refer to shape obj here -> 20
console.log(shape.perimeter());   // this will refer to window obj here -> NaN

// ------------------------------------------Ques IMPORTANT----------------------------------------------------------------
// Find output

function getItems(fruitList, ...args, favouriteFruit){
    return [...fruitList, ...args, favouriteFruit]
}

getItems(["banana", "apple"], "pear", "orange");

//------> Rest operator can't be used in between, it must be last parameter


function getItems(fruitList, favouriteFruit, ...args){
    return [...fruitList, ...args, favouriteFruit]
}

getItems(["banana", "apple"], "pear", "orange");  


//Ans -
// ...args capture remaining arguments , so ...args = ["orange"]
// ["banana", "apple", "orange", "pear"]



// ------------------------------------------Ques IMPORTANT----------------------------------------------------------------
// Find output (Object Referencing)

let c = {greeting: "Hey!"};
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

//Ans
//Hello (We had simply provide refernce of d to c.)


// ------------------------------------------Ques----------------------------------------------------------------
// Find output 

/
console.log({a: 1} == {a:1});
console.log({a: 1} === {a:1});

// Both will be false, because both have different reference (memory space)


// ------------------------------------------Ques----------------------------------------------------------------
// Find output 

let person = {name : "Lydia"};
const members = [person];
person = null;

console.log(members);

//Ans-
// [{
//     name: "Lydia"
// }]


// ------------------------------------------Ques----------------------------------------------------------------
// Find output 

const value = {number: 10};

const multiply = (x = {...value}) => {
    console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value); //20
multiply(value); //40

// ------------------------------------------Ques IMPORTANT----------------------------------------------------------------
// Find output 

function changeAgeAndReference(person) {
    person.age = 25;

    person = {
        name: "John",
        age: 50,
    };

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30
}

const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1);  //---------->Alex, 25
//here in func we are reassigning the person to another obj so it will not change refernce and will have person1 Alex of 25 but person2 returning will be new pwerson


 
console.log(personObj2);  // John, 50