import React from 'react'

import FilterSection from '../FilterSection/index';
import Border from '../Border/index';

import AboutUsStyled from './style';

const AboutUs = () => (

    <>
        <AboutUsStyled>
            <div id="aboutUs" className="AboutUs container-fluid">
                <div className="AboutUs__row row">

                    <FilterSection
                    filterClass="AboutUs__filter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    sectionClass="AboutUs__section"
                    section="nosotros"/>

                </div>
                <div className="AboutUs__row row">

                    <Border 
                    divClass="AboutUs__contain col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    borderClass="AboutUs__border"
                    />

                    <div className="AboutUs__menu col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="AboutUs__presentation">
                            <p className="AboutUs__text">Somos una empresa lider en diseño web y posicionamiento SEO. Con mas de 5 años de experiencia en el mercado, entregando siempre productos de calidad y buen servicio</p>
                        </div>
                    </div>

                    <Border 
                    divClass="AboutUs__contain col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    borderClass="AboutUs__border"
                    />

                </div>
                <div className="AboutUs__row row">
                    <div className="AboutUs__columns col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="AboutUs__column">
                            <p className="AboutUs__span">
                            AIRhitect no solo es una empresa, sino una mision, nacio en Argentina de la mano de Estevan Suarez, founder y CEO de AIRhitect 
                            en un contexto muy inestable en este país, pero con una idea clara, ser un pilar revolucíon del mercado latinoamericano en tecnología.
                            </p>
                        </div>
                        <div className="AboutUs__column">
                            <p className="AboutUs__span">
                                AIRhitect actualmente trabaja con muchos startups en pleno crecímiento como tambien con empresas denominadas "unicornios" como lo son Globant y Mercadolibre, a su véz ha logrado obtener una inversíon en el fondo de inversiones de Sillicon Valley 
                                gracias al crecimíento tan exponencíal que ha tenido en estos ultimos años.
                            </p>
                        </div>
                        <div className="AboutUs__column">
                            <p className="AboutUs__span">
                                AIRhitect tiene un equipo de profesionales con mucha experiencía y perfilados a poder lograr la misíon de la empresa, la cual es que todo el mercado latinoamericano pueda introducirse en el mercado global a traves de la tecnología logrando asi un desarrollo en cada país de America Latina.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AboutUsStyled>
    </>

    
)


export default AboutUs