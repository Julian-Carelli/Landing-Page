import styled from 'styled-components'

const AboutUsStyled = styled.section `

padding-top:45px;

.AboutUs{
    background-color: #eae6eb;
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    height:100vh;
    padding:0px 30px;
    @media screen and (max-width:768px) and (min-width:0px){
        height:100%;
    }
    @media screen and (max-width:1200px) and (min-width:768px){
        height:100%;
        padding-top:45px;

    }
    
}

.AboutUs__filter {
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        padding-top:45px;
        font-size:13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        padding-top:45px;
        font-size:14px;
    }
    
}

.AboutUs__section {
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
    @media screen and (max-width:992px) and (min-width:768px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
}

.AboutUs__section:hover {
    color:#443d5b;
}

.AboutUs__contain {
    padding:20px 0px;
    width: 100%;
}

.AboutUs__border {
    height:3px;
    background-color: #302940;
    margin:auto;
    width:15%;
}

.AboutUs__menu {
    width:100%;
}

.AboutUs__presentation {
    display:flex;
    margin:auto;
    width:45%;
    font-size: 17px;
    @media screen and (max-width:480px) and (min-width:0px){
        width:auto;
        font-size:13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        width:auto;
        font-size:15px;
    }
    @media screen and (max-width:992px) and (min-width:480px){
        width:auto;
        font-size:16px;
    }
    @media screen and (max-width:1300px) and (min-width:992px){
        width:60%;
        font-size:17px;
    }
}

.AboutUs__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.semi_bold};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: #302940;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
    
    
}

.AboutUs__columns {
    display:flex;
    margin:auto;
    text-align:justify;
    @media screen and (max-width:768px) and (min-width:0px){
        display:flex;
        flex-direction:column;
    }
}

.AboutUs__column {
    padding:10px 12px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size:12px;
    }
    
    
}

.AboutUs__span {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSizeText.min};
    color: #443d5b;
}
`;

export default AboutUsStyled;