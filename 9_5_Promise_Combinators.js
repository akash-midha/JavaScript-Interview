// Promise APIs

const pr1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject('Promise 1 fulfilled');
    }, 3000);
});
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 resolved')
    }, 2000);
});
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected')
    }, 1000);
});

// Promise.All()
const PromiseAllResult = Promise.all([pr1, pr2, pr3]);
PromiseAllResult
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));


// Promise.allSettled()

const PromiseAllSettledResult = Promise.allSettled([pr1, pr2, pr3]);

PromiseAllSettledResult
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));


// // Promise.race()

const PromiseRaceResult = Promise.race([pr1, pr2, pr3]);

PromiseRaceResult
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err))
    .finally(() => console.log('PromiseRace Result is printed'));


// // Promise.any()


const PromiseAnyResult = Promise.any([pr1, pr2, pr3]);

PromiseAnyResult
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err))
    .finally(() => console.log('PromiseAny Result is printed'));

