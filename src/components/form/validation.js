

export default function validation(objeto) {
    // {username:  , password:  }
    const errors = {}
    const regExPass = new RegExp('[0-9]')


    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(objeto.username)){
        errors.email = 'Ingrese un email valido'
    }
    if(!objeto.email){
        errors.email = 'Ingrese su email'
    }
    if(objeto.email.length > 35){
        errors.email = 'Maximo 35 caracteres'
    }

    if(!regExPass.test(objeto.password)){
        errors.password = 'La password debe tener numeros'
    }
    if(objeto.password.length < 6 || objeto.password.length > 10){
        errors.password = 'Entre 6 y 10 caracteres'
    }


    return errors
}