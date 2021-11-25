import styled from 'styled-components'
import TextField from '@mui/material/TextField';

function AddReference() {

const DivAddPage = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content:center;
align-items:center; 
`
const DivAddForm = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 70%;
align-items:center;
`
const DivAddFormReference = styled.div`
display: flex;
flex-direction:column;
height: 30%;
width: 90%;
margin-top:40px;
background-color:lightgrey;
`
const DivAddLeftRight = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 30%;
align-items:center;
`
const DivAddCompletude = styled.div`
display: flex;
height: 20%;
width: 90%;
margin-top:40px;
background-color:lightgrey;
align-items:center;
justify-content:center;
font-size:12px;
`
const DivAddButtonAction = styled.div`
display: flex;
height: 8%;
width: 90%;
margin-top:40px;
background-color:lightgrey;
align-items:center;
justify-content:center;
font-size:12px;
`
const DivAddImage = styled.div`
display: flex;
height: 40%;
width: 90%;
margin-top:60px;
background-color:lightgrey;
align-items:center;
justify-content:center;
font-size:12px;
`
const TitreSection = styled.h2`
font-family:Karmilla;
font-Size: 30px;
padding:0px;
margin:0px;
`

    return (
        <DivAddPage>
            <DivAddForm>
                <DivAddFormReference>
                    <TitreSection>Référence</TitreSection>
                <TextField sx={{m: 1, width: '25ch'}} InputLabelProps={{style : {fontSize:'10px'}}} id="outlined-basic" label="Client" variant="outlined" size="small"/>
                <TextField sx={{m: 1, width: '25ch'}} InputLabelProps={{style : {fontSize:'10px'}}} id="outlined-basic" label="Titre" variant="outlined" size="small" />
                </DivAddFormReference>
                <DivAddFormReference>
                    <TitreSection>Etude de cas</TitreSection>
                <TextField sx={{m: 1, width: '25ch'}} InputLabelProps={{style : {fontSize:'10px'}}} id="outlined-basic" label="Client" variant="outlined" size="small"/>
                <TextField sx={{m: 1, width: '25ch'}} InputLabelProps={{style : {fontSize:'10px'}}} id="outlined-basic" label="Titre" variant="outlined" size="small" />
                </DivAddFormReference>
             </DivAddForm>
             <DivAddLeftRight>
                <DivAddCompletude> Graphique de complétude pour la partie référence et use case. Idée de Librairie : https://nivo.rocks/bar </DivAddCompletude>
                <DivAddButtonAction> Bouton "Enregistrer" et bouton "Valider" (?)</DivAddButtonAction>
                <DivAddImage> Bloc pour ajouter des photos en drag and drop</DivAddImage>
             </DivAddLeftRight>
        </DivAddPage>
    )
}

export default AddReference