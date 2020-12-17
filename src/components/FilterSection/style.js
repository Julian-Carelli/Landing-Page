import styled from 'styled-components'

const FilterSectionStyled = styled.div `

.FilterSection__name {
    font-size:15px;
}

.FilterSection__title {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.semi_bold};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: #302940;
}

`;

export default FilterSectionStyled;