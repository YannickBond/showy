import './Header.css'
import photoavatar from '../../assets/useravatar.jpeg'

function User() {
    return (
        <span className="compte_utilisateur">
            <img src={photoavatar} alt="Avatar" height="30px" />
        </span>
    )
}
export default User