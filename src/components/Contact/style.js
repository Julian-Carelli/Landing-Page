import styled from 'styled-components'

import fondo5 from '../../assets/images/fondo5.webp'


const ContactStyled = styled.footer.attrs({
    className:'Contact container-fluid',
    id:'contact'
}) `



display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
height:100%;
background-color:${props => props.theme.colorProject.violetSoft};
@media screen and (max-width:1200px) and (min-width:0px){
    height:100%;
}


.Contact__column {
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:45px;
    @media screen and (max-width:992px) and (min-width:0px){
        padding:45px 15px;
    }
}

.Contact__filter {
    text-align:start;
    padding:0px 15px;
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
}

.Contact__section {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: ${props => props.theme.colorProject.white};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    } 
} 

.Contact__section:hover {
    color:${props => props.theme.colorProject.graySoft};
}

.Contact__links {
    display:flex;
    justify-content:center;
    align-items:start;
    width:100%;
    padding: 45px;
    @media screen and (max-width:767px) and (min-width:0px){
        flex-direction:column;
        text-align:initial;
        padding:0px;
    }
    @media screen and (max-width:1200px) and (min-width:768px){
        flex-direction:column;
        padding:45px;
    }
}

.Contact__information {
    display: flex;
    flex-direction: column;
    width:50%;
    padding:0px 20px;
    @media screen and (max-width:1200px) and (min-width:0px){
        width:100%;
        padding:30px 20px;
    }
    
}

.Contact__personal {
    display:flex;
    width:50%;
    padding:0px 20px;
    @media screen and (max-width:1199px) and (min-width:0px){
        width:100%;
        padding:30px 20px;
    }
}


.Contact-personal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: inherit;
}

.Contact-personal__emails {
    display:flex;
    align-items:baseline;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-personal__icon {
    color:${props => props.theme.colorProject.white};
}


.Contact-personal__email {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    padding: 0px 10px;
    color:${props => props.theme.colorProject.white};
}

.Contact-personal__office {
    display:flex;
    align-items:baseline;
}

.Contact-personal__telephone {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    padding: 0px 10px;
    color:${props => props.theme.colorProject.white};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-personal__location {
    display:flex;
    align-items:baseline;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-personal__address {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    padding:0px 10px;
    color:${props => props.theme.colorProject.white};
    text-align:left;
}

.Contact-hiring {
    text-align:left;
}

.Contact-hiring__name {
    font-size:20px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-hiring__title {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeText.min};
    color:${props => props.theme.colorProject.white};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.min};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeText.min};
    }
}

.Contact-hiring__info {
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }

}

.Contact-hiring__text, .Contact-hiring__span{
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    color:${props => props.theme.colorProject.white};
}

.Contact__message {
    text-align:left;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 14px;
    }
}

.Contact__social-media {
    padding:20px 0px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 15px;
    }
}

.Contact__icon {
    font-size: ${props => props.theme.fontSizeTitle.min};
    padding: 0px 7px;
    color:${props => props.theme.colorProject.white};
}

.Contact__icon:hover{
    color:${props => props.theme.colorProject.grayHard};
    cursor:pointer;
}

.Contact__link {
    outline:none;
}

.Contact__link:focus .Contact__icon {
    color:${props => props.theme.colorProject.grayHard};
}


.Contact__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.min};
    color:${props => props.theme.colorProject.white};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
}

.Contact__form {
    padding: 45px;
    @media screen and (max-width:768px) and (min-width:0px){
        padding:30px 20px;
    }
    
}

.Contact__input-name, .Contact__input-email, .Contact__input-subject{
    max-width:50%;
    width:100%;
    padding: 10px 0px;
    font-size:17px;
    @media screen and (max-width:480px) and (min-width:0px){
        max-width:100%;
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        max-width:100%;
        font-size:13px;
    }
}

.Contact__input-textarea {
    padding:10px 0px;
    @media screen and (max-width:480px) and (min-width:0px){
        max-width:100%;
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact__input-button {
    background-color:${props => props.theme.colorProject.graySoft};
    border-radius:7px;
    color:${props => props.theme.colorProject.white};
    padding:10px 0px;
    max-width:50%;
    width:100%;
    @media screen and (max-width:480px) and (min-width:0px){
        max-width:100%;
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:0px){
        max-width:100%;
        font-size:13px;
    }
}

.Contact__input-button:hover {
    background-color:${props => props.theme.colorProject.white};
}

.Contact__button {
    width:100%;
    text-align:left;
    color:${props => props.theme.colorProject.violetSoft};
    font-size: ${props => props.theme.fontSizeText.min};
}


.Contact__input {
    background-color:${props => props.theme.colorProject.violetHard};
    color:${props => props.theme.colorProject.white};
    border:none;
    font-size: ${props => props.theme.fontSizeText.min};
    resize:none;

}

.Contact__map {
    background-image: url(${fondo5});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    object-fit:cover;
    height:100vh;
    width:100%;
    @media screen and (max-width:480px) and (min-width:0px){
        height:400px;
        background-size:cover;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        height:600px;
        background-size:cover;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        height:600px;
        background-size:cover;
    }

}

.Contact__space {
    @media screen and (max-width:1200px) and (min-width:0px){
        display:none;
    }
}

`;

export default ContactStyled;