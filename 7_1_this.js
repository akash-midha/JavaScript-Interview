// --------------------------------------------------------Ques----------------------------------------------
// Find output


// Arrow functions do not have their own this — they inherit it from their lexical scope (where the function is defined).

let user = {
    firstName: "Akash",
    age: 24,
    childObj: {
        lastName: "Midha",
        getDetails() {
            console.log(this.lastName, "and", this.firstName);    // Midha and undefined
            const nestedArrow = () => console.log(this.lastName);   // now here this will be childobj (Midha)
            nestedArrow();
        },
        checkDetails: () => {
            console.log(this.lastName, "and", this.firstName);      // undefined and undefined
        }
    }
}

// --------------------------------------------------------Ques----------------------------------------------
// this keyword in class

class userClass {
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const userObj = new userClass('Akash');
userObj.getName();


// --------------------------------------------------------Ques----------------------------------------------
// Find output

const user3 = {
    firstName: "Akash",
    getName() {
        const firstName = "Piyush";
        return this.firstName;
    },
};

console.log(user.getName());


// --------------------------------------------------------Ques----------------------------------------------
// Find output


let calculator = {
    read(){
        this.a = +prompt("a = ", 0);
        this.b = +prompt("b = ", 0);
    }

    sum() {
        ret
    }
};

