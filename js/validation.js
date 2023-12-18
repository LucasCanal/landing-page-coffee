let form = document.getElementById('email-box');
let email = document.getElementById('email');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');

form.addEventListener('submit', (e) => {
    if(email.value == '') {
        textForm.textContent = '* You need to fill in the email field!'
    } else if (validatorEmail(email.value) == true) {
        console.log(email.value)
        textForm.textContent = '';

        email.value = '';
    }

    else {
        console.log("Request not fulfilled")
    }


    e.preventDefault()
})

email.addEventListener("blur", () => {
    if(validatorEmail(email.value) !== true) {
        textForm.textContent = "* The email format must be Ex: name@abc.com"
    } else {
        textForm.textContent = ''
    }
})

function validatorEmail(email) {
    let emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(email)
}