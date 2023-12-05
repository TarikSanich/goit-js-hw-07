
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const initialSize = 30;
  let boxElements = '';
  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
    boxElements += box;
  }
  boxes.insertAdjacentHTML('beforeend', boxElements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
