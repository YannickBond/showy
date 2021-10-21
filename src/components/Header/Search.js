import styled from 'styled-components'
import loupe from '../../assets/loupe.png'

const HeaderSearch = styled.span`
display: flex;
flex: 10;
justify-content: center;
background-color: white;
`
const HeaderSearchInput = styled.input`
display: flex;
outline: none;
background-repeat: no-repeat;
background-image: url(${loupe});
background-size: 15px;
background-position: 15px center;
padding-left: 45px;
height: 30px;
width: 500px;
border-radius: 17px;
border: 1px solid lightgrey;
font-size: 10px;
`

function Search() {
    return (
        <HeaderSearch>
            <form method="post" action="#">
                <HeaderSearchInput type="search" name="recherche" placeholder="Recherche" alt="Formulaire de recherche" />
            </form>
        </HeaderSearch>
    )
}

export default Search