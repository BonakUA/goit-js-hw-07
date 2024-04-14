const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
   const cleaningInput = nameInput.value.trim();
   if (cleaningInput === '') {
    nameOutput.textContent = 'Anonymous';
   } else {
    nameOutput.textContent = cleaningInput;
   }
});