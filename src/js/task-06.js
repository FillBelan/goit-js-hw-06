// const testInput = document.querySelector('#validation-input');

// const lostFocus = testInput.addEventListener('blur', () => {
//     if (testInput.value.length == testInput.dataset.length) {
//         return testInput.style.borderColor = '#4caf50';
//     }
//     testInput.style.borderColor = '#f44336';
// })








const testInput = document.querySelector('#validation-input');

const lostFocus = testInput.addEventListener('blur', () => {
    if (testInput.value.length == testInput.dataset.length) {
        return testInput.classList.add('valid');
    }
    testInput.classList.add('invalid');
})