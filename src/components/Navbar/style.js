import styled from 'styled-components'

const NavbarStyled = styled.nav `

.Navbar {
    display:flex;
    justify-content:space-between;
    height:50px;
    padding:10px 20px;
}

.Navbar__row {
    display:flex;
    width:100%;
    position:fixed;
    z-index:9; 
}

.Navbar__menu {
    width:100%;
}

.Navbar__principal {
    width:35%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    padding:10px;
    @media screen and (max-width:768px) and (min-width:0px){
        width:25%;
        padding:5px;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        width:50%;
    }
    @media screen and (max-width:1200px) and (min-width:992px){
        width:40%;
    }
}

.Navbar__sections{
    font-family: ${props => props.theme.fontFamily.lato};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.medium};
    color:#443d5b;
    margin:auto;
    @media screen and (max-width:768px) and (min-width:0px){
        display:none;
    }
}

.Navbar__icon {
    font-size:30px;
    cursor:pointer;
    @media screen and (max-width:480px) and (min-width:0px){
        font-size:15px;
    }

    @media screen and (max-width:768px) and (min-width:480px){
        font-size:17px;
    }
}

.Navbar__section {
    background: white;
    position: absolute;
    top: 100%;
    left: 3%;
    width: 300px;
    box-sizing: border-box;
    margin-top: 45px;
    display: flex;
}

.Navbar__list {
    list-style: none;
    padding: 0px;
    margin: auto;
    width:100%;
}

.Navbar__item {
    padding:20px;
}

.Navbar__link {
    font-family: ${props => props.theme.fontFamily.lato};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.medium};
    color:#443d5b;
    text-decoration:none;
}

.Navbar__item:hover {
    background-color:#eae6eb;
}

.Navbar__brand {
    text-align:center;
    margin:auto;
    @media screen and (max-width:768px) and (min-width:0px){
        display:flex;
        justify-content:center;
        align-items:center;
    }

}

.Navbar__contact {
    display:flex;
    justify-content:flex-end;   
    width:100%;
    @media screen and (max-width:768px) and (min-width:0px){
        display:none;
    }
}

.Navbar__span {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:auto;
    padding:10px;
    background-color:white;
}

.Navbar__img {
    max-width:150px;
    width:100%;
    @media screen and (max-width:480px) and (min-width:0px){
        width:50%;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        width:60%;
    }
    @media screen and (max-width:992px) and (min-width:768px){
        width:80%;
    }
}

.Navbar__text {
    font-family: ${props => props.theme.fontFamily.lato};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: ${props => props.theme.fontSizeText.medium};
    color:#443d5b;
    text-decoration:none;
    padding:0px 10px;
}

`;

export default NavbarStyled;