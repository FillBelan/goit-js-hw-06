const startValue = document.querySelector('#value');
const upButton = document.querySelector('button[data-action="increment"]');
const downButton = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

const clickButtonIncrement = upButton.addEventListener('click', () => {
    counterValue += 1;
    startValue.textContent = counterValue;
});

const clickButtonDecrement = downButton.addEventListener('click', () => {
    counterValue -= 1;
    startValue.textContent = counterValue;
})

