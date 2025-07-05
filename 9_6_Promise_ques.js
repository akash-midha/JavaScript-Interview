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



//// ----------------------------------------------Ques--------------------------------------------


const promise11 = Promise.resolve('First');
const promise22 = Promise.resolve('Second');
const promise33 = Promise.reject('Third');
const promise44 = Promise.resolve('Fourth');

const runPromises = async () => {
    const res1 = await Promise.all([promise11, promise22]);
    const res2 = await Promise.all([promise33, promise44]);
    return [res1, res2];
};

runPromises()
    .then(res => console.log(res))
    .catch(err => console.log(err));




// Ques

console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("promise1");
    })
    .then(() => {
        console.log("promise2");
    });

console.log("end");


//start
// end
// promise1
// promise2
// setTimeout

Promise.resolve()
    .then(() => {
        console.log("promise1");
        return new Promise((res) => setTimeout(res, 1000));
    })
    .then(() => {
        console.log("promise2");
    });


//promise1
// 1 second later
// promise2



// IMPORTANT

console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    setTimeout(() => {
      console.log("setTimeout inside promise");
    }, 0);
  });

console.log("end");

// start
// end
// promise1
// setTimeout
// setTimeout inside promise

