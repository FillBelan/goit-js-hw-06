function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const spanColor = document.querySelector('.color');
const bgColor = document.querySelector('.change-color');
bgColor.addEventListener('click', e => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
