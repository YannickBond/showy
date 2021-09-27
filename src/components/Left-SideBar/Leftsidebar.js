import './Leftsidebar.css'
import Extension from './Extension'
import Leftmenu from './Leftmenu'
import Logoshowy from './Logoshowy'

function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <Extension />
            <Leftmenu />
            <Logoshowy />
        </div>
        
    )
}

export default Leftsidebar