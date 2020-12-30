import styled from 'styled-components'

import fondo1 from '../../assets/images/fondo1.webp';


const PresentationStyled = styled.header.attrs({
    className:'Presentation',
    id:'presentation',
    height:"100%",
    width:"100%"
}) `


background-image: url(${fondo1});
background-size:cover;



`;

export default PresentationStyled;