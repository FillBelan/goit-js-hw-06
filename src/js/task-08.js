
const autorizationForm = document.querySelector(".login-form");

autorizationForm.addEventListener('submit', checkInput);
function checkInput(event) {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;


    if (email === '' || password === '') {
        alert ('Все поля должны быть заполнены!');
return;
    }
    const user = { email, password };

    console.log(user);
    autorizationForm.reset();
};





