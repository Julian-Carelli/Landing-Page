import styled from 'styled-components'

const OurTeamStyled = styled.section.attrs({
    className:'OurTeam container-fluid',
    id:'ourTeam'
}) `

padding-top:45px;
height:100%;
padding:90px 15px;


.OurTeam__row {
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    margin:0px;
    padding-top:45px;
    
    
}

.OurTeam__team {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    text-align:center;
    width:90%;
    margin:auto;
    padding: 90px 0px;
    @media screen and (max-width:767px) and (min-width:0px){
        flex-direction:column;
        width:100%;
    }
    
}

.OurTeam__integrate {
    padding:45px 30px;
    @media screen and (max-width:768px) and (min-width:0px){
        padding:40px 0px;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        padding:40px 30px;
    }
}

.OurTeam__img {
    width: 200px;
    max-width:100%;
    @media screen and (max-width:480px) and (min-width:0px){
        max-width:25%;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        max-width:25%;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        max-width:40%;
    }
}

.OurTeam__filter {
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 14px;
    }
}

.OurTeam__section {
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
}

.OurTeam__section:hover {
    color:${props => props.theme.colorProject.violetSoft};
}

.OurTeam__name{
    padding-top:20px;
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 13px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 14px;
    }
    
}


.OurTeam__title {
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
}

.OurTeam__profession {
    padding-bottom:20px;
    font-size:15px;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.OurTeam__skill {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeTitle.medium};
    color: ${props => props.theme.colorProject.violetHard};
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: ${props => props.theme.fontSizeText.medium};
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: ${props => props.theme.fontSizeTitle.min};
    }
}

.OurTeam__info {
    @media screen and (max-width:480px) and (min-width:0px){
        font-size: 12px;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        font-size: 13px;
    }
}

.OurTeam__text {
    font-family: ${props => props.theme.fontFamily.raleway};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.min};
    color: ${props => props.theme.colorProject.violetSoft};
}


`;

export default OurTeamStyled;