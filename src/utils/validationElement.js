//Una funcion que valida el elemento que se le pase, si esta vacio se retornara false y sino true (validationElement)

const validationElement = (element) => {
    if(element === ''){
        return false
    }
    else {
        return true
    }
}

export default validationElement