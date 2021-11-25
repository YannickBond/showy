import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from 'styled-components';

function AddButton(props) {

const Button = styled.button`
padding: 5px 15px;
border-radius: 20px;
background-color: #178C9A;
color: white;
border: none;
display: flex;
font-size: 14px;
align-items: center;
align-text:center;
justify-content:center;
`

return (
    <Button >
        <AddCircleOutlineIcon sx={{ color: 'white', fontSize: 15, marginRight:1}}/>
        Ajouter
    </Button>
    )
}
 
export default AddButton