import { createKeyboard } from "./components/createKeyboard.js";


const BODY = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const keyboard = document.querySelectorAll('.keyboard');

let isAng = true;
let isShift = false;
let capslock = false;

const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
textArea.placeholder = 'Enter your message...';
wrapper.prepend(textArea);

const changeLanguageInfo = document.createElement('p');
changeLanguageInfo.classList.add('changeLanguageInfo');
changeLanguageInfo.textContent = 'Переключение языка Shift + Alt';
wrapper.append(changeLanguageInfo);

for (let key of keyboard) {

    //Печать текста при клике на клавишу экранной клавиатуры
    key.addEventListener('click', function(event) {
        let target = event.target;
        let text = '';

        //console.log(target);

        if (target.classList.contains('keyboard')) {
            return
        } else if (target.innerText === 'Backspace') {
            text = textArea.value;
            textArea.value = text.slice(0, -1);
        } else if (target.innerText === 'Delete' || target.innerText === 'Alt' || target.innerText === 'Ctrl' || target.innerText === 'Win' || target.innerText === 'Shift') {
            return
        } else if (target.innerText === 'CapsLock') {
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

    //Анимация при дейсвтиях мыши и смена языка при нажатии на клавишу Shift
    key.addEventListener('mousedown', (event) => {
        let target = event.target;
        if (target.classList.contains('keyboard')) {
            return
        } else if (target.innerText === 'Shift') {
            isShift ? isShift = false : isShift = true;
            createKeyboard (isAng, isShift);
        }
        target.classList.add('key_active');
    });

    key.addEventListener('mouseup', (event) => {
        let target = event.target;
        if (target.classList.contains('keyboard')) {
            return
        } else if (target.innerText === 'Shift') {
            isShift ? isShift = false : isShift = true;
            createKeyboard (isAng, isShift);
        }
        target.classList.remove('key_active');
    });
}


//Анимация кнопок клавиатуры при нажатии
document.addEventListener('keydown', (event) => {
    //event.preventDefault();
    const keys = document.querySelectorAll('.key');
    const space = document.querySelector('.space');

    for (let key of keys) {
        if (key.innerText === event.key || key.classList.contains(event.key.toLowerCase())) {
            key.classList.add('key_active');
        } else if (event.code === 'Space') {
            space.classList.add('key_active');
        }
    }
});

//Отключение анимации кнопок клавиатуры при отпускании клавиши
document.addEventListener('keyup', (event) => {
    //event.preventDefault();
    const keys = document.querySelectorAll('.key');
    const space = document.querySelector('.space');
    
    for (let key of keys) {
        if (key.innerText === event.key || key.classList.contains(event.key.toLowerCase())) {
            key.classList.remove('key_active');
        } else if (event.code === 'Space') {
            space.classList.remove('key_active');
        }
    }
});


//События клавиатуры
for (let key of keyboard) {
    
    document.addEventListener('keyup', (event) => {
       //console.log(event.key);
       //event.preventDefault();
       let text = '';

        if (event.key === 'Tab') {
            textArea.value += '   ';
        } else if (event.key === 'Backspace') {
            text = textArea.value;
            textArea.value = text.slice(0, -1);
        } else if (event.key === 'Enter') {
            textArea.value += `\n`;
        } else if (event.key === 'ArrowLeft') {
            textArea.value += '←';
        } else if (event.key === 'ArrowRight') {
            textArea.value += '→';
        } else if (event.key === 'ArrowUp') {
            textArea.value += '↑';
        } else if (event.key === 'ArrowDown') {
            textArea.value += '↓';
        } else if (event.key === 'Shift') {

            if (event.altKey) {
                isAng ? isAng = false : isAng = true;
                createKeyboard(isAng);
            } 

        } else if (event.key === 'CapsLock') {
            isShift ? isShift = false : isShift = true;
            capslock ? capslock = false : capslock = true;
            createKeyboard (isAng, isShift);
        } else if (event.key === 'Alt') {

            if (event.shiftKey) {
                isAng ? isAng = false : isAng = true;
                createKeyboard(isAng);
            }

        } else if (event.key === 'Control' || event.key === 'Delete' || event.key === 'Meta') {
            return
        } else {
            if (!capslock) {
                event.shiftKey ? textArea.value += event.key.toUpperCase() : textArea.value += event.key.toLowerCase();
            } else {
                event.shiftKey ? textArea.value += event.key.toLowerCase() : textArea.value += event.key.toUpperCase();
            }
        }
    });
}