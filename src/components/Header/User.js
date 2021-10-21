import photoavatar from '../../assets/useravatar.jpeg'
import styled from 'styled-components'

const Usericonespan = styled.span`
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 30px;
background-color: white;
flex: 1;
`
const Usericoneimg = styled.img`
height:30px;
border-radius: 10px;
`

function User() {
    return (
        <Usericonespan>
            <Usericoneimg src={photoavatar} alt="Icone de l'utilisateur" />
        </Usericonespan>
    )
}
export default User