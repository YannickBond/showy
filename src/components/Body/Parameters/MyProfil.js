import TextField from '@mui/material/TextField';
import styled from 'styled-components';

function MyProfil() {

const DivpMyProfil = styled.div`
display: flex;
height: 90%;
width: 85%;
margin:2px;
`

    return (
        <DivpMyProfil  >
            <TextField InputLabelProps={{style : {fontSize:'10px'}}} id="outlined-basic" label="Nom de la société" variant="outlined" size="small"/>
            <TextField id="outlined-basic" label="url du site de la société" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="a" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="c" variant="outlined" size="small" />
        </DivpMyProfil>
    )
}
export default MyProfil