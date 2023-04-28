const engKeysboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const rusKeysboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const engKeysboardShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const rusKeysboardShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
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

const createKeyboard = (isAng = true, isShift = false) => {
    keyboard.innerHTML = '';
    let keysInkeyboard = [];

    if (isAng && isShift === false) {
        keysInkeyboard = engKeysboard;
    } else if (isAng && isShift === true){
        keysInkeyboard = engKeysboardShifted;
    } else if (isAng === false && isShift === true){
        keysInkeyboard = rusKeysboardShifted;
    } else {
        keysInkeyboard = rusKeysboard;
    }


    for (let i = 0; i < keysInkeyboard.length; i++) {
        const key = document.createElement('div');
        key.classList.add('key');
    
        if (keysInkeyboard[i].length > 1) {
            key.classList.add(keysInkeyboard[i].toLowerCase());
        }
        
        if (keysInkeyboard[i] === 'ArrowUp') {
            key.innerHTML = '↑';
        } else if (keysInkeyboard[i] === 'ArrowDown') {
            key.innerHTML = '↓';
        } else if (keysInkeyboard[i] === 'ArrowLeft') {
            key.innerHTML = '←';
        } else if (keysInkeyboard[i] === 'ArrowRight') {
            key.innerHTML = '→';
        } else if (keysInkeyboard[i] === 'Control') {
            key.innerHTML = 'Ctrl';
        } else if (keysInkeyboard[i] === 'Meta') {
            key.innerHTML = 'Win';
        } else if (keysInkeyboard[i] === 'Space') {
            key.innerHTML = '';
        } else {
            key.innerHTML = keysInkeyboard[i];
        }
        keyboard.append(key);
    }
}

export { createKeyboard };