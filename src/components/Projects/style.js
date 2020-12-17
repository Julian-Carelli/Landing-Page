import styled from 'styled-components'

import fondo2 from '../../assets/images/fondo2.webp'
import fondo4 from '../../assets/images/fondo4.webp'
import slider from '../Figure/slider'

const ProjectsStyled = styled.section `

padding-top:45px;


.Projects {
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    height:100vh;
    padding:0px 15px;
    @media screen and (max-width:480px) and (min-width:0px){
        height:100%;
    }
}

.Projects__row {
    position:relative;
}


.Projects__img-1 {
    padding:45px 15px;
    background-image: url(${fondo2});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100vh;
    @media screen and (max-width:767px) and (min-width:0px){
        padding:0px;
        background-image: none;
        height:auto;
    }
}

.Projects__filter {
    text-align:start;
    padding:0px 15px;
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        position:absolute;
        top:0%;
        z-index:6;
        padding:45px 30px;
        font-size:13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        position:absolute;
        top:0%;
        z-index:6;
        padding:45px 30px;
        font-size:14px;
    }
}

.Projects__section {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: #302940;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
}

.Projects__section:hover {
    color:#443d5b;
}

.Projects__cards {
    padding: 0px 0px;
    height:100vh;
    @media screen and (max-width:767px) and (min-width:0px){
        height:700px;
    }
}

.Projects__card {
    padding:20px;
    text-align:left;
    @media screen and (max-width:768px) and (min-width:0px){
        background-color:white;
        width:100%;
        position:absolute;
        bottom:10%;
    }
}

.Projects__name {
    font-size:17px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 15px;
    }
    
    
}

.Projects__title {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: #302940;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }

}

.Projects__info {
    font-size:20px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size:12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 14px;
    }
}

.Projects__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    color: #302940;
}

.Projects__image {
    height:80%;
    overflow:hidden;
    @media screen and (max-width:768px) and (min-width:0px){
        background-image:url(${fondo2});
        position:relative;
        height:100%
    }
}

.Projects__figure {
    display:flex;
    position:relative;
    width:100%;
    animation:20s ${slider} infinite;
}

.Projects__background {
    float:left;
    width:100%;
    height:100vh;
    object-fit:cover;
    flex-shrink: 0;
}

.Projects__img-2 {
    padding:45px 15px;
    background-image: url(${fondo4});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100vh;
    @media screen and (max-width:767px) and (min-width:0px){
        display:none;   
    }
}



`;

export default ProjectsStyled;