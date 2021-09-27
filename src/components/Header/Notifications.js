import './Header.css'
import notification from '../../assets/notification.png'

function Notifications() {
    return (
        <span className="notifications">
            <img src={notification} alt="Logo de l'entreprise Showy" height="20px"/>
            <span className="nombrenotifications"> 3 </span>        
        </span>
    ) 
}

export default Notifications