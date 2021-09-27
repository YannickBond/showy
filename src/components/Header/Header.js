import Logo from './Logo'
import Search from './Search'
import User from './User'
import Notifications from './Notifications'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Logo />
            <Search />
            <Notifications />
            <User />
        </div>
    )
}

export default Header