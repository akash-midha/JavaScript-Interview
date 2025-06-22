// Create a button UI and add debounce as follows -
// Show button pressed x times everytime button is pressed
// Show button triggered y times after 800ms of debounce




// Debounce Polyfill

const debounce = (cb, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

const button = document.querySelector('.debouce_btn');
const btn_pressed = document.querySelector('.debounce_pressed');
const btn_triggered = document.querySelector('.debounce_triggered');

let pressed = 0;
let triggered = 0;

const debouncedCount = debounce(() => {
    btn_triggered.innerHTML = ++triggered;
}, 800);

button.addEventListener('click', function () {
    btn_pressed.innerHTML = ++pressed;
    debouncedCount();
});