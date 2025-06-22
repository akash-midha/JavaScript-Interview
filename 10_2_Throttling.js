// Create a button UI and add debounce as follows -
// Show button pressed x times everytime button is pressed
// Show button triggered y times after every 500ms




// Throttle Polyfill

const throttle = (cb, delay) => {
    let last = 0;
    return function (...args) {
        let now = Date.now();
        if (now - last < delay) {
            return;
        }
        last = now;
        return cb(...args);
    }
}

const button = document.querySelector('.debouce_btn');
const btn_pressed = document.querySelector('.debounce_pressed');
const btn_triggered = document.querySelector('.debounce_triggered');

let pressed = 0;
let triggered = 0;

const throttleCount = throttle(() => {
    btn_triggered.innerHTML = ++triggered;
}, 500);

button.addEventListener('click', function () {
    btn_pressed.innerHTML = ++pressed;
    throttleCount();
});