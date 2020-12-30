import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';

import validationForm from '../utils/validationForm';


import theme from '../assets/variables/variables';
import Presentation from '../components/Presentation';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import OurTeam from '../components/OurTeam';
import Contact from '../components/Contact';

import logo from '../assets/images/logo.png'
import logoWhite from '../assets/images/logoWhite.png'

class LandingPage extends Component {


    //Cree un state el cual va a tener dos valores, uno es status que va servir para gestionar el formulario y el otro es checkbox que va a servir para gestionar la hamburguer(this.state).

    constructor(props){
        super(props)
        this.state = {
            status:'',
            checkbox:'desactivate'
        }
    }
    componentDidMount(){

        //Gracias al evento 'scroll' voy a poder saber la ubicacion aproximada de donde se encuentra el usuario en la pagina y de esa manera activar el metodo showScrollY(window.addEventListener("scroll"))

        window.addEventListener("scroll", this.showScrollY);


        //Gracias al evento 'click' voy a poder saber la ubicacion exacta del click del usuario y de esa manera activar el metodo showClick(window.addEventListener("click"))

        window.addEventListener("click", this.showClick)

        //Gracias al evento 'keyup' puedo definir que cuando se toque cierta tecla, se pueda ejecutar el metodo listenForEsc(document.body.addEventListener("keyup"))

        document.body.addEventListener("keyup", e => this.listenForEsc(e))

        if(this.state.status === 'error'){
            document.getElementById('text-error').focus()
        }

        if(this.state.status === 'ok'){
            document.getElementById('airhitect-text').focus()
        }


    }

    //Gracias a este metodo cuando se toque la tecla enter en el icono de hamburguesa (este icono tiene un evento 'keyup'), se llamara al metodo  handleHamburguer para que pueda abrir la navegacion de la pagina y si se toca la tecla enter en el icono de cerrar(que se encuentra en el modal), se llamara al metodo closeModal que cerrara el modal (listenForEnter) 

    listenForEnter = e => {
        if(e.keyCode === 13 && e.target.className === 'Navbar__icon hamburguer fas fa-bars'){
            this.handleHamburguer()
        }
        if(e.keyCode === 13 && e.target.className === 'Modal__icon fas fa-times-circle'){
            this.closeModal()
        }
    }

    //Gracias a este metodo cuando se toque la tecla escape, este va a activar otro metodo llamado closeModal que me permitira cerrar el modal(listenForEsc)

    listenForEsc = e => {
        if(e.keyCode === 27){
            this.closeModal()
        }
    }

    //Gracias a este metodo cuando el usuario pase cierto rango en scroll "Y", voy a cambiar de imagen en referencia al logo (showScrollY)

    showScrollY = () => {
        let scrollY = window.scrollY
        let image = document.getElementById("image")

        if(scrollY > 3925){
            image.src=`${logoWhite}`;
        }
        else{
            image.src=`${logo}`;
        }
    }

    //Gracias a este metodo puedo gestionar la activacion y desactivacion del hamburguer (handleHamburguer)

    handleHamburguer = () => {

        if(this.state.checkbox === 'desactivate'){
            this.setState({
                checkbox:'activate'
            })

        }
        else {
            this.setState({
                checkbox:'desactivate'
            })
        }
    }

    //Gracias a este metodo puedo clickear en otros elementos para que el hamburguer desaparezca (showClick)

    showClick = e => {

        let value = e.target.classList.value

        if(value !== 'Navbar__item' && value !== 'Navbar__icon hamburguer fas fa-bars' && value !== 'Navbar__link'){
            this.setState({
                checkbox:'desactivate'
            })
        }
    }


    //Gracias a este metodo puedo hacer que se envia un cambio al estado 'status' haciendo que si es valido los valores puestos en el input, que mande un 'ok' y sino un 'error' para poder gestionar mejor los mensajes(handleOnSubmit).
    

    handleOnSubmit = e => {
        e.preventDefault()

        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let subject = document.getElementById('subject')
        let message = document.getElementById('message')

        //validationForm es una funcion encargada de evaluar los parametros pasados (validationForm) gracias a otra funcion mas

        if(validationForm(name.value, email.value, subject.value, message.value) === true){
            name.value =  ''
            email.value= ''
            subject.value = ''
            message.value = ''
            this.setState({
                status: 'ok'
            })



        }

        else {
            setTimeout(() => {
                this.setState({
                    status:'error'
                })
                setTimeout(() => {
                    this.setState({
                        status: ''
                    })
                    
                }, 3500);
            }, 0);   
        }
    }

    //Un metodo que sirve para poder cambiar el estado 'status' y que se pueda cerrar el modal puesto en los formularios que aparece cuando todo los campos son validos (closeModal).

    closeModal = () => {
        this.setState({
            status:''
        })
    }



    render(){
        return(
            <ThemeProvider theme={theme}>
                <Presentation
                handleHamburguer={this.handleHamburguer}
                listenForEnter={this.listenForEnter}
                checkbox={this.state.checkbox}
                />
                <AboutUs/>
                <Projects/>
                <OurTeam/>
                <Contact
                handleOnSubmit={this.handleOnSubmit}
                closeModal={this.closeModal}
                listenForEnter={this.listenForEnter}
                status={this.state.status}
                />
            </ThemeProvider>
        )
    }
}

export default LandingPage