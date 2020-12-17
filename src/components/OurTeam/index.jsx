import React from 'react'

import FilterSection from '../FilterSection/index';
import Integrant from '../Integrant';

import OurTeamStyled from './style';
import persona from '../../assets/images/persona.png';

const OurTeam = () => (

    <>
        <OurTeamStyled>
            <div id="ourTeam" className="OurTeam container-fluid">
                <div className="OurTeam__row row">
                    <FilterSection 
                        filterClass="OurTeam__filter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        sectionClass="OurTeam__section"
                        section="nuestro equipo"
                    />
                </div>
                <div className="OurTeam__row row">
                    <div className="OurTeam__team">
                        <Integrant
                            integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2"
                            name = "Julian Carelli"
                            img = {persona}
                            title= "Julian Carelli, integrante de AIRhitect"
                            profession = "Programador"
                            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad adipisci esse temporibus illum nesciunt, omnis minus neque unde tempora aspernatur ipsam reprehenderit. Distinctio, necessitatibus earum quaerat minima praesentium dolore!"
                        />

                        <Integrant
                            integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2"
                            name = "Matias Linari"
                            title= "Matias Linari, integrante de AIRhitect"
                            img = {persona}
                            profession = "Administrador"
                            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad adipisci esse temporibus illum nesciunt, omnis minus neque unde tempora aspernatur ipsam reprehenderit. Distinctio, necessitatibus earum quaerat minima praesentium dolore!"
                        />

                        <Integrant
                            integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2"
                            name = "Estevan Suarez"
                            title= "Estevan Suarez, integrante de AIRhitect"
                            img = {persona}
                            profession = "Ceo"
                            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad adipisci esse temporibus illum nesciunt, omnis minus neque unde tempora aspernatur ipsam reprehenderit. Distinctio, necessitatibus earum quaerat minima praesentium dolore!"
                        />

                        <Integrant
                            integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2"
                            name = "Nicolas Torres"
                            img = {persona}
                            title= "Nicolas Torres, integrante de AIRhitect"
                            profession = "Ingeníero de software"
                            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad adipisci esse temporibus illum nesciunt, omnis minus neque unde tempora aspernatur ipsam reprehenderit. Distinctio, necessitatibus earum quaerat minima praesentium dolore!"
                        />

                        <Integrant
                            integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2"
                            name = "Guido Gasalla"
                            title= "Guido Gasalla, integrante de AIRhitect"
                            img = {persona}
                            profession = "Arquitecto de software"
                            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad adipisci esse temporibus illum nesciunt, omnis minus neque unde tempora aspernatur ipsam reprehenderit. Distinctio, necessitatibus earum quaerat minima praesentium dolore!"
                        />  
                    </div>
                </div>
            </div>
            
        </OurTeamStyled>
    </>

    
)


export default OurTeam