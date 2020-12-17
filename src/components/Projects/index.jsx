import React from 'react'

import FilterSection from '../FilterSection/index';

import ProjectsStyled from './style';

const Projects = () => (

    <>
        <ProjectsStyled>
            <div id="projects" className="Projects container-fluid">
                <div className="Projects__row row">
                    <div className="Projects__img-1 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <FilterSection 
                        filterClass="Projects__filter"
                        sectionClass="Projects__section"
                        section="proyectos"
                        />

                    </div>
                    <div className="Projects__cards col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"> 

                        <div className="Projects__image">

                        </div>
                        <div className="Projects__card">
                            <div className="Projects__name">
                                <h2 className="Projects__title">
                                    Nombre del proyecto
                                </h2>
                            </div>
                            <div className="Projects__info">
                                <p className="Projects__text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="Projects__img-2 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">

                    </div>
                </div>
            </div>
        </ProjectsStyled>
    </>

    
)


export default Projects