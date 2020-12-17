import validationElement from './validationElement'

const validationForm = e => {

    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value


    if(validationElement(name) && validationElement(email) && validationElement(subject) && validationElement(message)){
        console.log('ganamos')
    }
    else {
        return false
    }
    
}

document.getElementById('form').addEventListener('submit', validationForm);