import React from 'react'

import MenuStyled from './style'
import Border from '../Border/index'


const Menu = () => (

    <MenuStyled>
        <div className="Menu__row row">
        
            <Border
            divId="border1"
            divClass="Menu__contain col-2 col-sm-2 col-md-6 col-lg-1 col-xl-2"
            borderClass="Menu__border"
            />
        
            <div id="menu" className="Menu__principal col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8">
                <div className="Menu__info">
                    <h1 tabIndex="0" className="Menu__title">
                        diseñamos tu futuro
                    </h1>
                    <p tabIndex="0" className="Menu__text">
                        lideres en web designer
                    </p>
                </div>
        
            </div>
        
            <Border
            divId="border2"
            divClass="Menu__contain col-2 col-sm-2 col-md-6 col-lg-1 col-xl-2"
            borderClass="Menu__border"
            />
        
        </div>
    </MenuStyled>
)


export default Menu