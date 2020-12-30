import React from 'react'

import FilterSection from '../FilterSection/index';
import Figure from '../Figure/index'

import ProjectsStyled from './style';
import fondo1 from '../../assets/images/fondo1.webp'
import fondo2 from '../../assets/images/fondo2.webp'
import fondo3 from '../../assets/images/fondo3.webp'


const Projects = () => (

    <ProjectsStyled>
        <div className="Projects__row row">
            <div className="Projects__img-1 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <FilterSection 
                filterClass="Projects__filter"
                sectionClass="Projects__section"
                section="proyectos"
                />
            </div>
            <div className="Projects__cards col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4"> 
                <div className="Projects__image">
                    <FilterSection 
                    filterClass="Projects__query"
                    sectionClass="Projects__section"
                    section="proyectos"
                    />
                    <Figure
                    classFigure="Projects__figure"
                    classImg="Projects__background"
                    img1={fondo3}
                    img2={fondo2}
                    img3={fondo1}
                    img4={fondo3}
                    img5={fondo2}        
                    />
                </div>
                <div className="Projects__card">
                    <div className="Projects__name">
                        <h2 tabIndex="0" className="Projects__title">
                            Proyectos hechos por <strong>AIRhitect</strong>
                        </h2>
                    </div>
                    <div className="Projects__info">
                        <p tabIndex="0" className="Projects__text">
                            Nos encargamos de hacer realidad tus proyectos.
                        </p>
                    </div>
                </div>

            </div>
            <div aria-hidden="true" className="Projects__img-2 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            </div>
        </div>
    </ProjectsStyled>
  
)


export default Projects