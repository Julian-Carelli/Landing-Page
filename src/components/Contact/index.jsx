import React from 'react'

import FilterSection from '../FilterSection/index';
import Modal from '../Modal/index';

import ContactStyled from './style';

const Contact = ({handleOnSubmit, closeModal, status}) => (

    <>
        <ContactStyled>
            <div id="contact" className="Contact container-fluid">
                <div className="Contact__row row">
                    <div className="Contact__column col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <FilterSection 
                            filterClass="Contact__filter"
                            sectionClass="Contact__section"
                            section="contacto"
                        />
                        <div className="Contact__links">
                            <div className="Contact__information">
                                <div className="Contact__message">
                                    <p className="Contact__text">
                                        Contactanos por email, telefono o ven a nuestras oficinas!
                                    </p>
                                </div>
                                <div className="Contact-personal">
                                    <div className="Contact-personal__emails">
                                        <i className="Contact-personal__icon fas fa-envelope"></i>
                                        <p className="Contact-personal__email">
                                            info@airhitect.com
                                        </p>
                                    </div>
                                    <div className="Contact-personal__office">
                                        <i className="Contact-personal__icon fas fa-phone-alt"></i>
                                        <div className="Contact-personal__telephones">
                                            <p className="Contact-personal__telephone">
                                                +12 34 567 890
                                            </p>
                                            <p className="Contact-personal__telephone">
                                                +09 87 654 321
                                            </p>
                                        </div>
                                    </div>
                                    <div className="Contact-personal__location">
                                        <i className="Contact-personal__icon fas fa-home"></i>
                                        <p className="Contact-personal__address">
                                            1012 budapest Marvany utca 16
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="Contact__personal">                            
                                <div className="Contact-hiring">
                                    <div className="Contact__social-media">
                                        <i className="Contact__icon fab fa-linkedin"></i>
                                        <i className="Contact__icon fab fa-facebook-square"></i>
                                        <i className="Contact__icon fab fa-instagram"></i>
                                        <i className="Contact__icon fab fa-google-plus-square"></i>
                                    </div>
                                    <div className="Contact-hiring__name">
                                        <h3 className="Contact-hiring__title">
                                            Estamos contratando!
                                        </h3>
                                    </div>
                                    <div className="Contact-hiring__info">
                                        <p className="Contact-hiring__text">
                                            Estamos en la búsqueda de nuevos talentos para nuestro equipo! Si piensas que tu eres la persona correcta para AIRhitect mandanos un email con tu CV y portafolio. No te olvides de escribir acerca de ti!
                                        </p>
                                        <span className="Contact-hiring__span">
                                            job@airhitect.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {status === 'error' && 

                            <p className="Contact__text text-danger">
                                Error en el formulario, porfavor ingrese los datos nuevamente    
                            </p>   
                                          
                        }
                        
                        <Modal 
                            status={status}
                            closeModal={closeModal}
                        />
                        
                        <form onSubmit={handleOnSubmit} className="Contact__form">
                            <div className="Contact__input-name">
                                <input id="name" type="text" className="Contact__input form-control" placeholder="Name"></input>
                            </div>
                            <div className="Contact__input-email">
                                <input id="email" type="email" className="Contact__input form-control" placeholder="E-mail"></input>
                            </div>
                            <div className="Contact__input-subject">
                                <input id="subject" type="text" className="Contact__input form-control" placeholder="Subject"></input>
                            </div>
                            <div className="Contact__input-textarea">
                                <textarea id="message" type="text" className="Contact__input form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="Contact__input-button">
                                <button className="Contact__button  btn">Send message</button>
                            </div>
                        </form>
                    </div>
                    <div className="Contact__map col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    </div>
                </div>
            </div>
            
        </ContactStyled>
    </>

    
)


export default Contact