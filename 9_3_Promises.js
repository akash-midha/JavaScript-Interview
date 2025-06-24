// Basic Promise

console.log('start');

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) {
            resolve('Promise is resolved');
        }
        else {
            const err = new Error('Promise is rejected');
            reject(err);
        }
    }, 1000)
});

console.log(pr);

pr
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    })

console.log('end');




// another example

const pr2 = new Promise((resolve) => resolve('Promise resolved'));
pr2.then((res) => console.log(res));