// Output based ques on Promises
// -----------------------------------------------------------------------------------------------



console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});
promise1.then((res) => {
    console.log(res);
});
console.log('end');

// start , 1 , end , 2



// -----------------------------------------------------------------------------------------------
console.log('start');
const promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});
promise2.then((res) => {
    console.log(res);
});
console.log('end');

// start , 1 , 3,  end , 2



// -----------------------------------------------------------------------------------------------


console.log('start');
const promise3 = new Promise((resolve, reject) => {
    console.log(1);
    console.log(3);
});
promise3.then((res) => {
    console.log(`result is ${res}`);
});
console.log('end');

// start 1 3 end (it will not go into then because it is not resolved).


// ----------------------------------------------------------------------------------------------------------------------

console.log('start');
const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    });

console.log('middle');

fn().then((res) => {
    console.log(res);
});

console.log('end');

// start , middle , 1 , end , success

// --------------------------------------------------------------------------------------------------------------------


function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise5 = job();

promise
    .then(function () {
        console.log(' Success 1');
    })
    .then(function () {
        console.log(' Success 2');
    })
    .then(function () {
        console.log(' Success 3');
    })
    .catch(function () {
        console.log(' Error 1');
    })
    .then(function () {
        console.log(' Success 4');
    })

// --------------------------------------------------------------------------------------------------------------------

//Error1, Success 4


// ----------------------------------------------------------------------------------------------------------------------
// very ggod question to understand chaining.

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        }
        reject('error');
    });
}

let promise6 = job(true);

promise6
    .then(function (data) {
        console.log(data);
        return job(false);
    })
    .catch(function (error) {
        console.log(error);
        return "Error caught";
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
    })

// success ,error, Error caught



// ----------------------------------------------------------------------------------------------------------------------


function job2(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        }
        reject('error');
    });
}

let promise = job2(true);

promise
    .then(function (data) {
        console.log(data);
        return job2(true); 
    })
    .then(function (data) {
        if (data != 'victory') {
            throw "Defeat";
        }
        return job2(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job2(false);
    })
    .then(function (data) {
        console.log(data);
        return job2(true);
    })
    .catch(function (error) {
        console.log(error);
        return 'Error caught';
    })
    .then(function (data) {
        console.log(data);
        return new Error("test");
    })
    .then(function (data) {
        console.log("Success:", data.message);
    })
    .catch(function (data) {
        console.log("Error:", data.message);
    })

    //success, Defeat, error, Error caught, Success: test