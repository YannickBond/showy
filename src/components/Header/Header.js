import Logo from './Logo'
import Search from './Search'
import User from './User'
import Notifications from './Notifications'
import styled from 'styled-components'

const HeaderConteneur = styled.div`
display: flex;
top: 0;
width: max-widt;
align-items: center;
border-bottom: 1px solid lightgrey;
position: sticky;
background-color: white;
`

function Header() {
    return (
        <HeaderConteneur>
            <Logo />
            <Search />
            <Notifications />
            <User />
        </HeaderConteneur>
    )
}

export default Header