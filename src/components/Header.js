import Logo from './Logo'
import Search from './Search'
import User from './User'
import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <Logo />
            <Search />
            <User />
        </div>
    )
}

export default Header