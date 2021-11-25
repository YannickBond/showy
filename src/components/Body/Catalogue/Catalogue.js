import TableCatalogue from './TableCatalogue'
import FilterByTypeCatalogue from './FilterByTypeCatalogue'
import styled from 'styled-components';
import TopReadToolBar from '../TopReadToolbar';

function Catalogue() {

const DivAddPage = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content:center;
align-items:center; 
`
const DivReadRef = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 70%;
align-items:center;
`
const DivConteneurTable = styled.div`
display: flex;
margin-top:20px;
width: 90%;
align-items:center;
justify-content:center;
`
const DivRightSection = styled.div`
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

    return (
        <DivAddPage>
            <DivReadRef>
                    <TopReadToolBar >
                        <FilterByTypeCatalogue/>
                    </TopReadToolBar>
                <DivConteneurTable>
                    <TableCatalogue/>
                </DivConteneurTable>
            </DivReadRef>
            <DivRightSection> 
                <DivAddCompletude> Graphique de complétude pour la partie référence et use case. Idée de Librairie : https://nivo.rocks/bar </DivAddCompletude>
                <DivAddButtonAction> Bouton "Créer un catalogue" et bouton "Exporter"</DivAddButtonAction>
            </DivRightSection>
        </DivAddPage>
    )
}

export default Catalogue