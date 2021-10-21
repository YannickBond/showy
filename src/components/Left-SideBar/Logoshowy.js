import logoshowy from '../../assets/logo_showy.svg'
import styled from 'styled-components'
import Box from '@mui/material/Box';

const LogoShowyImg = styled.img`
height:20px;
`
const DivShowy = styled.div`
display: flex;
height: 10%;
width: 100%;
align-items: center;
justify-content: center;
border-top : grey solid 1px
`

function Logoshowy() {
    return (
        <DivShowy >
            <LogoShowyImg src={logoshowy} alt="Logo de l'éditeur Showy"/>
        </DivShowy>
    )
}

export default Logoshowy