const textRange = document.querySelector('#font-size-control');
const changeFont = document.querySelector('#text');
textRange.addEventListener("input", e => {
    changeFont.style.fontSize = textRange.value + 'px'
});
