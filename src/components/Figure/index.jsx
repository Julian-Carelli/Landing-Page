import React from 'react'


const Figure = ({classFigure, classImg, img1, img2, img3, img4, img5}) => (
    <figure className={classFigure}>
        <img aria-hidden="true" className={classImg} title="Proyecto de AIRhitect" src={img1} alt="Proyecto 1"/>
        <img aria-hidden="true" className={classImg} title="Proyecto de AIRhitect" src={img2} alt="Proyecto 2"/>
        <img aria-hidden="true" className={classImg} title="Proyecto de AIRhitect" src={img3} alt="Proyecto 3"/>
        <img aria-hidden="true" className={classImg} title="Proyecto de AIRhitect" src={img4} alt="Proyecto 4"/>
        <img aria-hidden="true" className={classImg} title="Proyecto de AIRhitect" src={img5} alt="Proyecto 5"/>
    </figure>
)

export default Figure