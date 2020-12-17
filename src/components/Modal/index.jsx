import React from 'react'
import ReactDOM from 'react-dom'

import ModalStyled from './style'


const Modal = ({status, closeModal}) => {


    if(status === 'ok'){

        return ReactDOM.createPortal((
            <ModalStyled>
                <div className="Modal">
                    <div className="Modal__container">
                        <div className="Modal__response">
                            <p className="Modal__text">
                                Gracias por su consulta, en breve le responderemos.
                            </p>
                            <i onClick={closeModal}className="Modal__icon fas fa-times-circle"></i>
                            
                        </div>
                        <span className="Modal__span">
                            El equipo de AIRhitect
                        </span>
                    </div>
                </div>
            </ModalStyled>
            
        ),document.getElementById('modal'))
    }

    else {
        return null
    }

    
             
}


export default Modal