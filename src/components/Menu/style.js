import styled from 'styled-components'

const MenuStyled = styled.section.attrs({
    className:'Menu container-fluid'
})`


display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
height:100vh;
@media screen and (max-width:480px) and (min-width:0px){
    height:auto;
    padding:180px 0px;
}


.Menu__row {
    justify-content:center;
    align-items:baseline;
    padding:45px;
    @media screen and (max-width:991px) and (min-width:0px){
        margin:auto;
        padding:0px;
    }
    @media screen and (max-width:1171px) and (min-width:991px){
        padding:0px;
    }
}

.Menu__contain {
    background-color:${props => props.theme.colorProject.violetHard};
    height:3px;
    padding:0px 90px; 
}

.Menu__border {
    @media screen and (max-width:480px) and (min-width:0px){
        width:25%;
    }
}


.Menu__principal {
    padding:45px 0px;
}

.Menu__info{
    font-size: 25px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size:13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size:16px;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        font-size:20px;
    }
}

.Menu__title {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizeTitle.max};
    color: ${props => props.theme.colorProject.violetHard};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.medium};
    }
    @media screen and (max-width:992px) and (min-width:768px){
        font-size: ${props => props.theme.fontSizeTitle.medium};
    }
}

.Menu__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSizeTitle.min};
    color: ${props => props.theme.colorProject.violetSoft};
    @media screen and (max-width:768px) and (min-width:0px){
        display:none;
    }
}

`;

export default MenuStyled;