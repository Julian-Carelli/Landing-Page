import React from 'react'

import FilterSectionStyled from './style'

const FilterSection = ({filterClass, sectionClass, section}) => (

    <FilterSectionStyled>
        <div className={filterClass}>
            <h2 tabIndex="0" className={sectionClass}>
                {section}
            </h2>
        </div>
    </FilterSectionStyled>
    
)

export default FilterSection