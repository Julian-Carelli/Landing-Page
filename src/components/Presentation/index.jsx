import React from 'react'

import Navbar from '../Navbar'
import Menu from '../Menu'

import PresentationStyled from './style'

const Presentation = ({handleHamburguer, checkbox}) => (

    <PresentationStyled>
        <div id="presentation" className="Presentation">
            <>
            <Navbar
            handleHamburguer={handleHamburguer}
            checkbox={checkbox}
            />

            <Menu></Menu>
            </>
        </div>
    </PresentationStyled>
    
)


export default Presentation