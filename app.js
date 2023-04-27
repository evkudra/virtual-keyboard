import { createKeyboard } from "./components/createKeyboard.js";

const BODY = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const keyboard = document.querySelectorAll('.keyboard');

let isAng = false;




const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
textArea.placeholder = 'Enter your message...';
wrapper.prepend(textArea);

createKeyboard (isAng);
