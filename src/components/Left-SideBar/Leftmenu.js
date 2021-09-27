import './Leftsidebar.css'
import references from '../../assets/references.svg'
import addreferences from '../../assets/addreferences.svg'
import catalogue from '../../assets/catalogue.svg'
import addcatalogue from '../../assets/addcatalogue.svg'
import statistic from '../../assets/statistique.svg'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Leftmenu() {
    return (
        <nav className="leftmenu">
             <ul className="liste_menu"> 
                <li ><Link to="/references"> <img src={references} height="28px"  /> </Link></li>
                <li ><Link to="/addreferences"> <img src={addreferences} height="28px"  /></Link></li>
                <li ><Link to="/catalogue"> <img src={catalogue} height="26px" /> </Link></li>
                <li ><Link to="/addcatalogue"> <img src={addcatalogue} height="26px" /></Link></li>
                <li ><Link to="/statistics"> <img src={statistic} height="28px" /></Link></li>
            </ul>
        </nav>
    )
}

export default Leftmenu