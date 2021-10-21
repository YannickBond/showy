import wikitlogo from '../../assets/logowikit.png'
import styled from 'styled-components'

const HeaderLogoSociete = styled.span`
display: flex;
align-items: center;
padding-left: 30px;
min-height: 50px;
flex: 2;
background-color: white;
`
const HeaderLogoimg = styled.img`
height:15px;
`

function Logo() {
    return (
        <HeaderLogoSociete>
            <HeaderLogoimg src={wikitlogo}  alt='Logo de la société Wikit'/>
        </HeaderLogoSociete>
    )
}

export default Logo