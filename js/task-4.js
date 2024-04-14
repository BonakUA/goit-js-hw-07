const form = document.querySelector('.login-form');

const onFormSabmit = event => {
    event.preventDefault();
    const form = event.currentTarget
    const emailUser = form.elements.email.value.trim();
    const passwordUser = form.elements.password.value.trim();
    if (emailUser === '' || passwordUser === '') {
        alert(`All form fields must be filled in`);
    } else {
        const formInfo = {
            email: emailUser,
            password: passwordUser,
        };
        console.log(formInfo);
        event.currentTarget.reset();
    }
};
form.addEventListener('submit', onFormSabmit);