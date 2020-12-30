import React from 'react'

import FilterSection from '../FilterSection/index';
import Border from '../Border/index';

import AboutUsStyled from './style';

const AboutUs = () => (

    <AboutUsStyled>
        <section className="AboutUs__row row">

            <FilterSection
            filterClass="AboutUs__filter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            sectionClass="AboutUs__section"
            section="nosotros"/>

        </section>
        <section className="AboutUs__row row">

            <Border 
            divClass="AboutUs__contain col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            borderClass="AboutUs__border"
            />

            <section className="AboutUs__menu col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <article className="AboutUs__presentation">
                    <p tabIndex="0" className="AboutUs__text">Somos una <strong>empresa líder en diseño web y posicionamiento SEO</strong>. Con más de 5 años de experiencia en el mercado, entregando siempre productos de calidad y buen servicio</p>
                </article>
            </section>

            <Border 
            divClass="AboutUs__contain col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            borderClass="AboutUs__border"
            />

        </section>
        <section className="AboutUs__row row">
            <article className="AboutUs__columns col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <article className="AboutUs__column">
                    <p tabIndex="0" className="AboutUs__span">
                        <strong>AIRhitect</strong> no solo es una empresa, sino una misión, nació en Argentina de la mano de Esteban Suárez, founder y CEO de AIRhitect en un contexto muy inestable en este país, pero con una idea clara, ser un pilar de la revolución del mercado latinoamericano en tecnología.
                    </p>
                </article>
                <article className="AboutUs__column">
                    <p tabIndex="0" className="AboutUs__span">
                        <strong>AIRhitect</strong> actualmente trabaja con muchos startups en pleno crecimiento como también con empresas denominadas "unicornios" como lo son Globant y Mercado libre, a su véz ha logrado obtener una inversíon en el fondo de inversiones de Sillicon Valley 
                        gracias al crecimiento tan exponencial que ha tenido en estos últimos años.
                    </p>
                </article>
                <article className="AboutUs__column">
                    <p tabIndex="0" className="AboutUs__span">
                        <strong>AIRhitect</strong> tiene un equipo de profesionales con mucha experiencia y perfilados a poder lograr la misión de la empresa, la cual es que todo el mercado latinoamericano pueda introducirse en el mercado global a través de la tecnología logrando así un desarrollo en cada país de América Latina.
                    </p>
                </article>
            </article>
        </section>
    </AboutUsStyled>
)


export default AboutUs