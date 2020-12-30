import React from 'react'

import Navbar from '../Navbar'
import Menu from '../Menu'

import PresentationStyled from './style'

const Presentation = ({handleHamburguer, listenForEnter, checkbox}) => (

    <PresentationStyled>
        <Navbar
            handleHamburguer={handleHamburguer}
            listenForEnter={listenForEnter}
            checkbox={checkbox}
        />

        <Menu/>
    </PresentationStyled>
    
)


export default Presentation