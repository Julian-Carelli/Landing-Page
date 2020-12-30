import styled from 'styled-components'

const AboutUsStyled = styled.main.attrs({
    className:'AboutUs container-fluid',
    id:'aboutUs'
}) `


display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
height:100vh;
background-color: ${props => props.theme.colorProject.graySoft};
padding:90px 30px;
@media screen and (max-width:768px) and (min-width:0px){
    height:100%;
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
    color: ${props => props.theme.colorProject.violetHard};
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
    color:${props => props.theme.colorProject.violetSoft};
}

.AboutUs__contain {
    padding:20px 0px;
}

.AboutUs__border {
    height:3px;
    background-color: ${props => props.theme.colorProject.violetHard};
    margin:auto;
    width:15%;
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
    color: ${props => props.theme.colorProject.violetHard};
    @media screen and (max-width:768px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    
}

.AboutUs__columns {
    display:flex;
    margin:auto;
    text-align:left;
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
    color: ${props => props.theme.colorProject.violetSoft};
}
`;

export default AboutUsStyled;