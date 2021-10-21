import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';


const IconeExtension = styled.div`
display: flex;
height: 10%;
width: 100%;
align-items: center;
justify-content: center;
`
function Extension() {
    return (
        <IconeExtension>
            <CodeIcon sx={{ color: 'white', fontSize: 26 , padding:'10px'}} alt="Icone pour étendre le menu latéral gauche"/>
        </IconeExtension>
    )
}

export default Extension