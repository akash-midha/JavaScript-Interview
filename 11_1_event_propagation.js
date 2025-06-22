// Event propagation
//  Diff in event.target , event.currentTarget , this

const divId = document.getElementById('event_div');
const formId = document.getElementById('event_form');
const buttonId = document.getElementById('event_button');

divId.addEventListener('click', eventFunc, { capture: true })

formId.addEventListener('click', eventFunc, { capture: true })

buttonId.addEventListener('click', eventFunc, { capture: true })

function eventFunc(event) {
    alert('event.currentTarget = ' + event.currentTarget.tagName + ' this =  ' + this.tagName + ' event.target = ' + event.target.tagName);
}



// event.stopPropagation()

divId.addEventListener('click', eventFuncStop)

formId.addEventListener('click', eventFuncStop)

buttonId.addEventListener('click', eventFuncStop)

function eventFuncStop(event) {
    event.stopPropagation();
    alert('event.currentTarget = ' + event.currentTarget.tagName + ' this =  ' + this.tagName + ' event.target = ' + event.target.tagName);
}


// Event Delegation

const listid = document.getElementById('list-item');
listid.addEventListener('click', function () {
    if (event.target.tagName == 'LI') {
        window.location.href += "/" + event.target.textContent;
        console.log(event.target.textContent);
    }
})

