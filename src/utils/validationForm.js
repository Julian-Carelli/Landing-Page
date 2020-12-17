import validationElement from './validationElement'

//Una funcion que sirve para validar el formulario, pasandole parametros que puedan ser evaluados gracias a otra funcion, si es valido el proceso, se retorna un true y sino un false (validationForm)

const validationForm = (name, email, subject, message) => {


    if(validationElement(name) && validationElement(email) && validationElement(subject) && validationElement(message)){
        return true
    }
    else {
        return false
    }
    
}

export default validationForm
