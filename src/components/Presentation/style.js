import styled from 'styled-components'

import fondo1 from '../../assets/images/fondo1.png';


const PresentationStyled = styled.section `


.Presentation {
    background-image: url(${fondo1});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100%;
    @media screen and (max-width:480px) and (min-width:0px){
        height:auto;
    }
}


`;

export default PresentationStyled;