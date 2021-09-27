import './Header.css'
import cleverage from '../../assets/cleverage.png'

function Logo() {
    return (
        <span className="logo">
            <img src={cleverage} height="30px" />
        </span>
    )
}

export default Logo