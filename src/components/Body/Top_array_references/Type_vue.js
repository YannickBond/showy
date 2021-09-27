
import '../Body_read_references.css'
import vue_icone from '../../../assets/vue_icone.svg'
import vue_liste from '../../../assets/vue_liste.svg'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Type_vue() {
    return (
        <div className="top_array_type_vue">
             <ul className="liste_type_vue"> 
                <li ><Link to="/"> <img src={vue_icone} height="20px"  /> </Link></li>
                <li ><Link to="/"> <img src={vue_liste} height="18px"  /></Link></li>
            </ul>
        </div>
    )
}

export default Type_vue

