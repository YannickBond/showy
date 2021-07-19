import '../styles/Logo.css'
import logo from '../assets/logo.png'

function Logo() {
    return (
        <span className="logo">
            <img src={logo} alt="Logo de l'entreprise Showy" height="20%" width="20%" />
            <a href="google.com">
                <h1>Showy</h1>
            </a>
        </span>
    )
}

export default Logo