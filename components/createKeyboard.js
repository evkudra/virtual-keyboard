const engKeysboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const rusKeysboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const BODY = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
BODY.append(wrapper);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

// let s = [];

// document.addEventListener('keydown', function(event) {
//     console.log(event.key);
//     s.push(event.key);
//     console.log(s);
//     console.log(event.code);
// });

const createKeyboard = (isAng) => {
    keyboard.innerHTML = '';
    if (isAng) {
        for (let i = 0; i < engKeysboard.length; i++) {
            const key = document.createElement('div');
            key.classList.add('key');
        
            if (engKeysboard[i].length > 1) {
                key.classList.add(engKeysboard[i].toLowerCase());
            }
            
            if (engKeysboard[i] === 'ArrowUp') {
                key.innerHTML = '↑';
            } else if (engKeysboard[i] === 'ArrowDown') {
                key.innerHTML = '↓';
            } else if (engKeysboard[i] === 'ArrowLeft') {
                key.innerHTML = '←';
            } else if (engKeysboard[i] === 'ArrowRight') {
                key.innerHTML = '→';
            } else if (engKeysboard[i] === 'Control') {
                key.innerHTML = 'Ctrl';
            } else if (engKeysboard[i] === 'Meta') {
                key.innerHTML = 'Win';
            } else if (engKeysboard[i] === 'Space') {
                key.innerHTML = '';
            } else {
                key.innerHTML = engKeysboard[i];
            }
            keyboard.append(key);
        }
    } else {
        for (let i = 0; i < rusKeysboard.length; i++) {
            const key = document.createElement('div');
            key.classList.add('key');
        
            if (rusKeysboard[i].length > 1) {
                key.classList.add(rusKeysboard[i].toLowerCase());
            }
            
            if (rusKeysboard[i] === 'ArrowUp') {
                key.innerHTML = '↑';
            } else if (rusKeysboard[i] === 'ArrowDown') {
                key.innerHTML = '↓';
            } else if (rusKeysboard[i] === 'ArrowLeft') {
                key.innerHTML = '←';
            } else if (rusKeysboard[i] === 'ArrowRight') {
                key.innerHTML = '→';
            } else if (rusKeysboard[i] === 'Control') {
                key.innerHTML = 'Ctrl';
            } else if (rusKeysboard[i] === 'Meta') {
                key.innerHTML = 'Win';
            } else if (rusKeysboard[i] === 'Space') {
                key.innerHTML = '';
            } else {
                key.innerHTML = rusKeysboard[i];
            }
            keyboard.append(key);
        }
    }
}

export { createKeyboard };