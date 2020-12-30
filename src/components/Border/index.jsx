import React from 'react'

const Border = ({divId, divClass, borderClass}) => (
    <div id={divId} className={divClass}>
        <div className={borderClass}></div>
    </div>
)

export default Border