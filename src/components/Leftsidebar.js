import '../styles/Leftsidebar.css'
import add from '../assets/add.png'
import catalog from '../assets/catalog.png'
import statistics from '../assets/statistics.png'
import adjust from '../assets/adjust.png'

function Leftsidebar() {
    return (
        <nav className="horizontal_gauche">
            <ul className="liste_horizontal">
                <li className="liste_action"><a className="action_png_active" href="add_ref.html"> <img src={add} /> </a></li>
                <li className="liste_action"><a className="action_png" href="add_catalogue.html"> <img src={catalog} /></a></li>
                <li className="liste_action"><a className="action_png_active" href="#"> <img src={statistics} /> </a></li>
                <li className="liste_action"><a className="action_png" href="configuration.html"> <img src={adjust} /></a></li>
            </ul>
        </nav>
    )
}

export default Leftsidebar