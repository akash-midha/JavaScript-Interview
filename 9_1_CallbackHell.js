// ------------------------------------------------Callback & callback hell------------------------------------------------------------------------
// What will be output

console.log('start');

function importantAction(username) {
    setTimeout(() => {
        return `Hello ${username}`;
    }, 1000);
}
const message = importantAction('Akash');
console.log('end');



// start, undefined, stop : If we want to print message after our settimeout we need to pass it as a callback


// ------------------------------------------------------------------------------------------------------------------------
// Fix the above code so that message will be printed

console.log('start');

function importantActionUsingCallback(username, cb) {
    setTimeout(() => {
        cb(`Hello ${username}`);
    }, 1000)
}

importantActionUsingCallback('Akash', (message) => {
    console.log(message);
})
