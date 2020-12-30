import React from 'react'

import FilterSection from '../FilterSection/index';
import Integrant from '../Integrant';

import OurTeamStyled from './style';
import persona from '../../assets/images/persona.png';

const OurTeam = () => (

    <OurTeamStyled>
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
                integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                name = "Julian Carelli"
                img = {persona}
                title= "Julian Carelli, integrante de AIRhitect"
                profession = "Programador"
                text ="Julian ocupa el rol de programador en AIRhitect y se caracteriza por un ser una persona disciplinada, honesta, y muy comprometida con su trabajo, maneja herramientas tanto de front end como de back end y se encarga de darle el soporte necesario brindando actualizaciones para nuestros clientes."
                />


                <Integrant
                integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                name = "Esteban Súarez"
                title= "Esteban Súarez, integrante de AIRhitect"
                img = {persona}
                profession = "Ceo"
                text = "Esteban ocupa el rol de CEO en AIRhitect, se caracteriza por ser una persona abierta al diálogo, positiva y atenta en su rol, maneja todo lo que tiene que ver con la administración de la empresa y proyecta a futuro nuevas acciones que puedan dar mejores resultados hacia AIRhitect"
                />

                <Integrant
                integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                name = "Matias Linari"
                title= "Matias Linari, integrante de AIRhitect"
                img = {persona}
                profession = "Administrador"
                text ="Matias ocupa el rol de administrador en AIRhitect, se caracteriza por ser una persona atenta y profesional en su ámbito, su rol en la empresa es administrar la comunicación con los clientes y escuchando las peticiones que tienen hacia la empresa."
                />

                <Integrant
                integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                name = "Nicolas Torres"
                img = {persona}
                title= "Nicolas Torres, integrante de AIRhitect"
                profession = "Ingeníero de software"
                text ="Nicolas ocupa el rol de ingeniero de software, se caracteriza por ser una persona profesional en su área, con mucha experiencia previa a esta y apasionado por lo que hace, su rol en la empresa es encargarse de analizar, diseñar, crear y probar los sistemas informáticos"
                />

                <Integrant
                integrateClass = "OurTeam__integrate col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                name = "Guido Gasalla"
                title= "Guido Gasalla, integrante de AIRhitect"
                img = {persona}
                profession = "Arquitecto de software"
                text ="Guido ocupa el rol de arquitecto de software, se caracteriza por ser una personal atenta, profesional y talentosa en su área, está encargado de la elección de diferentes herramientas de software para llevar acabo proyectos a gran escala"
                />  
            </div>
        </div>        
    </OurTeamStyled>
    
)


export default OurTeam