const wordsInput = document.querySelector('#name-input');
const wordsName = document.querySelector('#name-output');

const addName = wordsInput.addEventListener('input', (event) => {
    if (event.currentTarget.value == "") {
        return wordsName.textContent = 'Anonymous';
    }
    wordsName.textContent = event.currentTarget.value;
    console.log(event);
});
