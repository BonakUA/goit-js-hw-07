function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
input.classList.add('input');

const btnCreate = document.querySelector('[data-create]');
btnCreate.classList.add('btn', 'btn-create');

const btnDestroy = document.querySelector('[data-destroy]');
btnDestroy.classList.add('btn', 'btn-destroy');

const boxesContainer = document.querySelector('#boxes');
boxesContainer.classList.add('boxes-container');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box)
  }
  boxesContainer.appendChild(fragment);
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
