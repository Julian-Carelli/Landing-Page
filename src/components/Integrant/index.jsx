import React from 'react'

const Integrant = ({integrateClass, img, title, name, profession, text}) => (
    <div className={integrateClass}>
        <div className="OurTeam__background">
            <img className="OurTeam__img" title={title} src={img} alt="integrante del equipo"></img>
        </div>
        <div className="OurTeam__name">
            <h2 className="OurTeam__title">
                {name}
            </h2>
        </div>
        <div className="OurTeam__profession">
            <h3 className="OurTeam__skill">
                {profession}
            </h3>
        </div>
        <div className="OurTeam__info">
            <p className="OurTeam__text">
                {text}
            </p>
        </div>
    </div>
)

export default Integrant