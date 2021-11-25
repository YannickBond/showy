import styled from 'styled-components'

const HeaderLogoSociete = styled.span`
display: flex;
align-items: center;
padding-left: 30px;
min-height: 50px;
flex: 2;
background-color: white;
font:bold;
font-size:25px;
font-family:'Roboto':
`

function Logo() {
    return (
        <HeaderLogoSociete>
            Wikit
        </HeaderLogoSociete>
    )
}

export default Logo