function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
btn.style.borderRadius = '8px';
btn.style.padind = '8px', '16px';
btn.style.width = '148px';
btn.style.height = '40px';
btn.style.background = '#4e75ff';
btn.style.color = '#fff';
btn.style.fontSize = '16px';
btn.style.lineHeight = '1.5';

btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});