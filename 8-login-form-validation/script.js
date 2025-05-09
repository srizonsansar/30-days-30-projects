const loginContainer = document.querySelector('.login-container')
const loginForm = document.getElementById('loginForm')
const loginUsername = document.getElementById('loginUserName')

const loginPassword = document.getElementById('loginPassword')
const showPasswordIcon = document.querySelector('i.fa-eye')

showPasswordIcon.addEventListener('click', showPassword)

function showPassword(){

    if(loginPassword.type === 'password'){
        loginPassword.type = 'text'
        showPasswordIcon.style.color = 'red'
    } else {
        loginPassword.type = 'password'
        showPasswordIcon.style.color = ''
    }

}

loginForm.addEventListener('submit', submitValidation)

function submitValidation(e){
    e.preventDefault()
    if(loginUsername.value === '' || loginUsername.value.length < 3){
        showError(loginUsername, "Username can not be empty and must be above 3 character")
    } else {
        showSuccess(loginUsername)
    }
    if(loginPassword.value === '' || loginPassword.value.length < 6){
        showError(loginPassword, "Password can not be empty and less than 6 characters.")
    } else {
        showSuccess(loginPassword)
    }
}

function showError(input, message){
    const formField = input.parentElement;
    formField.className = 'form-field error'
    if(formField.className = 'form-field error'){
        const alert_message = formField.querySelector('.alert-message')
        alert_message.style.visibility = 'visible'
        alert_message.style.color = 'red'
        alert_message.innerText = message
    }
}

function showSuccess(input){
    const formField = input.parentElement
    formField.className = 'form-field success'
    if(formField.className = 'form-field success'){
        const alert_message = formField.querySelector('.alert-message')
        alert_message.style.visibility = 'hidden'
    }
}

// Request Form
const requestForm = document.querySelector('.form-request')
requestForm.style.display = 'none'
const showRequestForm = document.querySelector('.reset-password')
showRequestForm.addEventListener('click', function(e){
    e.preventDefault()
    if(requestForm.style.display !== 'block'){
        loginContainer.style.minHeight = '650px'
        requestForm.style.display = 'block'
    } else {
        requestForm.style.display = 'none'
        loginContainer.style.minHeight = 'initial'
    }
})


requestForm.addEventListener('submit', request)

function request(e){
    e.preventDefault()
    
    if(requestForm.style.display === 'block'){
        const requestEmail = document.getElementById('requestEmail')
        if(requestEmail.value === ''){
            showError(requestEmail, 'Email can not be empty')
        } else {
            showSuccess(requestEmail)
        }
    }
}