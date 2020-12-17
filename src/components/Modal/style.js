import styled from 'styled-components'


const ModalStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content:center;
    align-items:center;
    z-index:10;
    
    .Modal {
        background:white;
        border-radius:10px;
        padding:20px;
        max-width:400px;
        width:100%;
        @media screen and (max-width: 768px) and (min-width:0px){
            width:80%;
        }
    }

    .Modal__response {
        display:flex;
        align-items:baseline;
    }

    .Modal__text {
        font-family: ${props => props.theme.fontFamily.raleway};
        font-weight: ${props => props.theme.fontWeight.regular};
        font-size: ${props => props.theme.fontSizeText.medium};
        color:#302940;
    }

    .Modal__icon {
        font-size:25px;
    }
    .Modal__icon:hover {
        cursor:pointer;
        color:red;
    }

    .Modal__span {
        font-family: ${props => props.theme.fontFamily.raleway};
        font-weight: ${props => props.theme.fontWeight.bold};
        font-size: ${props => props.theme.fontSizeText.medium};
        color:#302940;
    }
`

export default ModalStyled