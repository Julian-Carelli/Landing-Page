import styled from 'styled-components'

import fondo5 from '../../assets/images/fondo5.webp'


const ContactStyled = styled.section `

padding-top:45px;


.Contact {
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    height:100%;
    background-color:#443d5b;
    @media screen and (max-width:1200px) and (min-width:0px){
        padding-top:45px;
        height:100%;
    }

}

.Contact__column {
    display:flex;
    justify-content:center;
    flex-direction:column;
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
    color: white;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
    
} 

.Contact__section:hover {
    color:#eae6eb;
}

.Contact__links {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding: 45px;
    @media screen and (max-width:768px) and (min-width:0px){
        flex-direction:column;
        text-align:initial;
        padding:0px;
    }
}

.Contact__information {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0px 20px;
    @media screen and (max-width:768px) and (min-width:0px){
        width:100%;
        padding:30px 20px;
    }
    
}

.Contact__personal {
    display:flex;
    width:50%;
    padding:0px 20px;
    @media screen and (max-width:768px) and (min-width:0px){
        width:100%;
        padding:30px 20px;
    }
}


.Contact-personal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
}

.Contact-personal__emails {
    display:flex;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-personal__icon {
    color:white;
}


.Contact-personal__email {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    padding: 0px 10px;
    color:white;
}

.Contact-personal__office {
    display:flex;
}

.Contact-personal__telephone {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    padding: 0px 10px;
    color:white;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.Contact-personal__location {
    display:flex;
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
    color:white;
}

.Contact-hiring {
    text-align:justify;
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
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color:white;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeText.medium};
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
    color:white;
}

.Contact__message {
    text-align:justify;
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
    font-size: ${props => props.theme.fontSizeTitle.medium};
    padding: 0px 7px;
    color:white;
}

.Contact__icon:hover {
    color:#eae6eb;
    cursor:pointer;
}


.Contact__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.min};
    color:white;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
}

.Contact__form {
    padding:45px;
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
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
}

.Contact__input-button {
    background-color:#eae6eb;
    border-radius:7px;
    color:white;
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
    background-color:white;
}

.Contact__button {
    width:100%;
    text-align:left;
    color:#443d5b;
    font-size: ${props => props.theme.fontSizeText.min};
}


.Contact__input {
    background-color:#302940;
    color:white;
    border:none;
    font-size: ${props => props.theme.fontSizeText.min};


}

.Contact__map {
    background-image: url(${fondo5});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    object-fit:cover;
    height:100vh;
    @media screen and (max-width:480px) and (min-width:0px){
        height:400px;
        background-size:contain;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        height:600px;
        background-size:contain;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        height:600px;
        background-size:contain;
    }

}

`;

export default ContactStyled;