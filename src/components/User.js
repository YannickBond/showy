import '../styles/User.css'
import photoavatar from '../assets/avatar.png'


function User() {
    return (
        <span className="compte_utilisateur">
            <img src={photoavatar} alt="Avatar" height="20%" width="20%" />
            <p className="nom_user"> Yannick R. </p>
        </span>
    )
}
export default User