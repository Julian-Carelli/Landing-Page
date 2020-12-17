import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';

import validationElement from '../utils/validationElement';

import theme from '../assets/variables/variables';
import Presentation from '../components/Presentation';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import OurTeam from '../components/OurTeam';
import Contact from '../components/Contact';

class LandingPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            status:'',
            checkbox:'desactivate'
        }
    }

    handleOnchange = e => {
        
        if(e.target.value === ''){
            this.setState({
                status:''
            })
        }
    }

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

    handleOnSubmit = e => {
        e.preventDefault()

        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let subject = document.getElementById('subject')
        let message = document.getElementById('message')


        if(validationElement(name.value) && validationElement(email.value) && validationElement(subject.value) && validationElement(message.value)){
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
                checkbox={this.state.checkbox}
                />
                <AboutUs/>
                <Projects/>
                <OurTeam/>
                <Contact
                handleOnSubmit={this.handleOnSubmit}
                handleOnchange={this.handleOnchange}
                closeModal={this.closeModal}
                status={this.state.status}
                />
            </ThemeProvider>
        )
    }
}

export default LandingPage