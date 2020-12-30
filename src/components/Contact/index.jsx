import React from 'react'

import FilterSection from '../FilterSection/index';
import Modal from '../Modal/index';

import ContactStyled from './style';

const Contact = ({handleOnSubmit, closeModal, listenForEnter, status}) => (

    <ContactStyled>
        <div className="Contact__row row">
            <div className="Contact__column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <FilterSection 
                filterClass="Contact__filter"
                sectionClass="Contact__section"
                section="contacto"
                />
                <div className="Contact__links">
                    <div className="Contact__information">
                        <article className="Contact__message">
                            <p tabIndex="0" className="Contact__text">
                                Contactanos por
                                <br className="Contact__space"></br> email, telefono o ven
                                <br className="Contact__space"></br> a nuestras oficinas!
                            </p>
                        </article>
                    <div className="Contact-personal">
                        <article className="Contact-personal__emails">
                            <i aria-hidden="true" className="Contact-personal__icon fas fa-envelope"></i>
                            <p tabIndex="0" aria-label="Correo electronico de AIRhitect" className="Contact-personal__email">
                                info@airhitect.com
                            </p>
                        </article>
                        <div className="Contact-personal__office">
                            <i aria-hidden="true" className="Contact-personal__icon fas fa-phone-alt"></i>
                            <article className="Contact-personal__telephones">
                                <p tabIndex="0" aria-label="Telefonos de AIRhitect" className="Contact-personal__telephone">
                                    +12 34 567 890
                                    <br className="Contact__space"></br>
                                    +09 87 654 321

                                </p>
                            </article>
                        </div>
                        <div className="Contact-personal__location">
                            <i aria-hidden="true" className="Contact-personal__icon fas fa-home"></i>
                            <p tabIndex="0" aria-label="Direccion de AIRhitect"className="Contact-personal__address">
                                1012 budapest 
                                <br></br>
                                Marvany utca 16
                            </p>
                        </div>
                    </div>
                </div>
                            
                <div className="Contact__personal">                            
                    <div className="Contact-hiring">
                        <article className="Contact__social-media">
                            <a tabIndex="0" className="Contact__link" aria-label="linkedin de julian carelli" href="https://www.linkedin.com/notifications/" target="blank">
                                <i aria-hidden="true" className="Contact__icon fab fa-linkedin"></i>
                            </a>
                            <a tabIndex="0" className="Contact__link" aria-label="github de julian carelli" href="https://github.com/Julian-Carelli" target="blank">
                                <i aria-hidden="true" className="Contact__icon fab fa-github"></i>
                            </a>
                            <a tabIndex="0" className="Contact__link" aria-label="instagram de julian carelli" href="https://www.instagram.com/juli.carelli_/" target="blank">
                                <i aria-hidden="true" className="Contact__icon fab fa-instagram"></i>
                            </a>
                        </article>
                        <article className="Contact-hiring__name">
                            <h3 tabIndex="0" className="Contact-hiring__title">
                                Estamos contratando!
                            </h3>
                        </article>
                        <article className="Contact-hiring__info">
                            <p tabIndex="0" className="Contact-hiring__text">
                                Estamos en la búsqueda de nuevos talentos para nuestro equipo! Si piensas que tu eres la persona correcta para AIRhitect mandanos un email con tu CV y portafolio. No te olvides de escribir acerca de ti!
                            </p>
                            <span tabIndex="0" className="Contact-hiring__span">
                                job@airhitect.com
                            </span>
                        </article>
                    </div>
                </div>
            </div>

            {status === 'error' && 

                <p id="text-error" aria-live="assertive" tabIndex="0" className="Contact__text text-danger">
                    Error en el formulario, porfavor ingrese los datos nuevamente    
                </p>   
                                          
            }
                        
            <Modal 
                status={status}
                closeModal={closeModal}
                listenForEnter={listenForEnter}
            />
                        
            <form tabIndex="0" aria-label="Utiliza este formulario para hacer cualquier tipo de consulta a AIRhitect" onSubmit={handleOnSubmit} className="Contact__form">
                <div className="Contact__input-name">
                    <input id="name" aria-label="nombre" type="text" className="Contact__input form-control" placeholder="Nombre"></input>
                </div>
                <div className="Contact__input-email">
                    <input id="email" aria-label="correo electronico" type="email" className="Contact__input form-control" placeholder="Correo electronico"></input>
                </div>
                <div className="Contact__input-subject">
                    <input id="subject" aria-label="asunto" type="text" className="Contact__input form-control" placeholder="Asunto"></input>
                </div>
                <div className="Contact__input-textarea">
                    <textarea id="message" aria-label="mensaje" type="text" className="Contact__input form-control" placeholder="Mensaje"></textarea>
                </div>
                <div className="Contact__input-button">
                    <button aria-label="enviar mensaje" className="Contact__button  btn">Enviar mensaje</button>
                </div>
            </form>
            </div>
                <div className="Contact__map col-sm-12 col-md-12 col-lg-12 col-xl-5">
            </div>
        </div>
    </ContactStyled>

    
)


export default Contact