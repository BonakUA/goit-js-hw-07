function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px 52px';
input.style.width = '150px';
input.style.height = '40px';
input.style.marginRight = '16px';

const btnCreate = document.querySelector('[data-create]');
btnCreate.style.padding = '8px 16px';
btnCreate.style.borderRadius = '8px';
btnCreate.style.width = '120px';
btnCreate.style.height = '40px';
btnCreate.style.background = '#4e75ff';
btnCreate.style.color = '#fff';
btnCreate.style.marginRight = '16px';

const btnDestroy = document.querySelector('[data-destroy]');
btnDestroy.style.padding = '8px 16px';
btnDestroy.style.borderRadius = '8px';
btnDestroy.style.width = '120px';
btnDestroy.style.height = '40px';
btnDestroy.style.background = '#ff4e4e';
btnDestroy.style.color = '#fff';

const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.display = 'flex';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '44px'
boxesContainer.style.marginTop = '16px'

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);
