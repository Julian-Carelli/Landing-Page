import React from 'react'
import ReactDOM from 'react-dom'

import ModalStyled from './style'


const Modal = ({status, closeModal, listenForEnter}) => {


    if(status === 'ok'){

        return ReactDOM.createPortal((
            <ModalStyled>
                <div className="Modal__container">
                    <div className="Modal__response">
                        <p id="airhitect-text" aria-live="assertive" tabIndex="1" className="Modal__text">
                            Gracias por su consulta, en breve le responderemos.
                        </p>
                        <i tabIndex="0" aria-label="cruz cerrar pedido de consulta confirmada" onKeyUp={listenForEnter} onClick={closeModal} className="Modal__icon fas fa-times-circle"></i>
                            
                    </div>
                    <span tabIndex="0" aria-live="assertive" className="Modal__span">
                        El equipo de AIRhitect
                    </span>
                </div>
            </ModalStyled>
            
        ),document.getElementById('modal'))
    }

    else {
        return null
    }

    
             
}


export default Modal