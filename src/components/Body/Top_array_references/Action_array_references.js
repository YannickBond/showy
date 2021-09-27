import '../Body_read_references.css'
import exportation from '../../../assets/exportation.svg'
import dupliquer from '../../../assets/dupliquer.svg'
import corbeille from '../../../assets/corbeille.svg'
import catalogue from '../../../assets/catalogue.svg'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Action_array_references() {
    return (
        <div className="top_array_action_vue">
             <ul className="liste_action_vue"> 
                <li ><Link to="/"> <img src={catalogue} height="20px"  /> </Link></li>
                <li ><Link to="/"> <img src={exportation} height="20px"  /> </Link></li>
                <li ><Link to="/"> <img src={dupliquer} height="18px"  /></Link></li>
                <li ><Link to="/"> <img src={corbeille} height="18px"  /></Link></li>
            </ul>
        </div>
    )
}

export default Action_array_references
