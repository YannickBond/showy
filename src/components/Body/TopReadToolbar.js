import styled from 'styled-components';
import AddButton from './AddButton';

/* J'ai mis ce bout de code ici car cette Top Tool Bar peut etre réutiliser dans 2 contextes à minima */

function TopReadToolBar(props) {

const DivTopTable = styled.div`
display: flex;
margin-top:40px;
width: 90%;
height:7%;
align-items:center;
justify-content:center;
`
const DivTopToggleView = styled.div`
display: flex;
width: 20%;
height:100%;
align-items:center;
`
const DivTopStatutFilter = styled.div`
display: flex;
width: 60%;
height:100%;
align-items:center;
`
const DivTopAddButton = styled.div`
display: flex;
width: 20%;
height:100%;
align-items:center;
justify-content:end;
`
    return (
        <DivTopTable>
            <DivTopToggleView>
            </DivTopToggleView>
            <DivTopStatutFilter>
                {props.children}
            </DivTopStatutFilter>
            <DivTopAddButton>
                <AddButton />
            </DivTopAddButton>
        </DivTopTable>
    )
}

export default TopReadToolBar