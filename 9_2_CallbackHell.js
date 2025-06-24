// callback hell

console.log('start');

function importantActionHere(username, cb) {
    setTimeout(() => {
        cb(`Hello ${username}`);
    }, 1000)
}

function likeVideo(video, cb) {
    setTimeout(() => {
        cb(`Like this ${video}`);
    }, 1000)
}

function shareVideo(video, cb) {
    setTimeout(() => {
        cb(`Share this ${video}`);
    }, 1000)
}

importantActionHere('Rahul', function (message) {
    console.log(message);
    likeVideo('JavaScript', (action) => {
        console.log(action);
        shareVideo('React', (action) => {
            console.log(action);
        });
    });
});

console.log('end');