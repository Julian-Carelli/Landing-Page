import React from 'react'


const Figure = ({classBackground, classFigure, classImg, img1, img2, img3, img4, img5}) => (
    <div className={classBackground}>
        <figure className={classFigure}>
            <img className={classImg} src={img1} alt="Proyecto 1"/>
            <img className={classImg} src={img2} alt="Proyecto 2"/>
            <img className={classImg} src={img3} alt="Proyecto 3"/>
            <img className={classImg} src={img4} alt="Proyecto 4"/>
            <img className={classImg} src={img5} alt="Proyecto 5"/>
        </figure>
    </div>
)

export default Figure