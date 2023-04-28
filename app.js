import { createKeyboard } from "./components/createKeyboard.js";


const BODY = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const keyboard = document.querySelectorAll('.keyboard');

let isAng = true;
let isShift = false;


const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
textArea.placeholder = 'Enter your message...';
wrapper.prepend(textArea);


const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
wrapper.append(checkbox);



checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        //console.log('checked')
        isAng = true;
        createKeyboard (isAng);
    } else {
        //console.log('unchecked')
        isAng = false;
        createKeyboard (isAng); 
    }
});


for (let key of keyboard) {
    key.addEventListener('click', function(event) {
        let target = event.target;
        let text = '';

        console.log(target);

        if (target.classList.contains('keyboard')) {
            return
        } else if (target.innerText === 'Backspace') {
            text = textArea.value;
            textArea.value = text.slice(0, -1);
        } else if (target.innerText === 'Delete' || target.innerText === 'Alt' || target.innerText === 'Ctrl' || target.innerText === 'Win') {
            return
        } else if(target.innerText === 'CapsLock') {
            isShift ? isShift = false : isShift = true;
            createKeyboard (isAng, isShift);
        } else if (target.innerText === 'Enter') {
            textArea.value += `\n`;
        } else if (target.innerText === '') {
            textArea.value += ' ';
        } else if (target.innerText === 'Tab') {
            textArea.value += '    ';
        } else {
            textArea.value += target.innerText; 
        }
    })
}
