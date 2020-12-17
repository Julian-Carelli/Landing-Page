import React from 'react'

import MenuStyled from './style'
import Border from '../Border/index'

const Menu = () => (


    <MenuStyled>
         <div className="Menu container-fluid">
            <div className="Menu__row row">

                <Border 
                    divClass="Menu__contain col-2 col-sm-2 col-md-6 col-lg-4 col-xl-4"
                    borderClass="Menu__border"
                />

                <div className="Menu__principal col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div className="Menu__info">
                        <h1 className="Menu__title">
                            diseñamos tu futuro
                        </h1>
                        <p className="Menu__text">
                            lideres en web designer
                        </p>
                    </div>

                </div>

                <Border 
                    divClass="Menu__contain col-2 col-sm-2 col-md-6 col-lg-4 col-xl-4"
                    borderClass="Menu__border"
                />

            </div>
        </div>

    </MenuStyled>
   
)

export default Menu