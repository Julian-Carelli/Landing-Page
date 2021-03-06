import React from 'react'

import NavbarStyled from './style'

import Logo from '../../assets/images/logo.png'

const Navbar = ({handleHamburguer, listenForEnter, checkbox}) => (

    
   
    <NavbarStyled>
        <div id="navbar" className="Navbar__row row">
            <div className="Navbar__menu col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">

                <div className="Navbar__principal">
                    <i tabIndex="0" aria-label="menu mostrar enlaces" onKeyUp={listenForEnter} onClick={handleHamburguer} className="Navbar__icon hamburguer fas fa-bars"></i> 
                    <p className="Navbar__sections">
                        menu
                    </p>
                </div>
                {checkbox === 'activate'

                    ?   <div id="Navbar_section" className="Navbar__section">
                            <ul className="Navbar__list">
                                <li className="Navbar__item"><a tabIndex="0" className="Navbar__link" href="#presentation">inicio</a></li>
                                <li className="Navbar__item"><a tabIndex="0" className="Navbar__link" href="#aboutUs">nosotros</a></li>
                                <li className="Navbar__item"><a tabIndex="0" className="Navbar__link" href="#projects">proyectos</a></li>
                                <li className="Navbar__item"><a tabIndex="0" className="Navbar__link" href="#ourTeam">nuestro equipo</a></li>
                                <li className="Navbar__item"><a tabIndex="0" className="Navbar__link" href="#contact">contacto</a></li>
                            </ul>
                        </div>

                    :   ''
                }

            </div>
            <div className="Navbar__brand col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="Navbar__logo">
                    <img width="100%" height="100%" id="image" className="Navbar__img" src={Logo} alt="Logo de Airhitect"></img>
                </div>
            </div>
            <div className="Navbar__contact col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="Navbar__span">
                    <i className="Navbar__icon fas fa-user-circle"></i>
                    <a tabIndex="0" href="#contact" className="Navbar__text">Contacto</a>
                </div>
            </div>
        </div>
    </NavbarStyled>
    
    
)

export default Navbar