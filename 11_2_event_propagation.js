// Make it such that first form trigger, then button then div

const divId = document.getElementById('event_div');
const formId = document.getElementById('event_form');
const buttonId = document.getElementById('event_button');

divId.addEventListener('click', eventFunc)

formId.addEventListener('click', eventFunc, { capture: true })

buttonId.addEventListener('click', eventFunc)

function eventFunc(event) {
    alert(event.currentTarget.tagName);
}
