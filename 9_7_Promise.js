

const firstPromise = new Promise((resolve, reject) => {
    resolve('first');
})

const secondPromise = new Promise((resolve, reject) => {
    resolve('second');
})

firstPromise.then(()=> secondPromise()).then((data) => firstPromise())