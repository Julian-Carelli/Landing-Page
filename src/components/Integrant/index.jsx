import React from 'react'

const Integrant = ({integrateClass, img, title, name, profession, text}) => (
    <div className={integrateClass}>
        <div className="OurTeam__background">
            <img tabIndex="0" className="OurTeam__img" title={title} src={img} alt={name}></img>
        </div>
        <div className="OurTeam__name">
            <h2 tabIndex="0" className="OurTeam__title">
                {name}
            </h2>
        </div>
        <div className="OurTeam__profession">
            <h3 tabIndex="0" className="OurTeam__skill">
                {profession}
            </h3>
        </div>
        <article className="OurTeam__info">
            <p tabIndex="0" className="OurTeam__text">
                {text}
            </p>
        </article>
    </div>
)

export default Integrant