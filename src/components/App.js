import Header from './Header/Header'
import Leftsidebar from './Left-SideBar/Leftsidebar';
import Top_array_references from './Body/Top_array_references/Top_array_references'
import Array_references from './Body/Array_references/Array_reference'
import './Body/Body_read_references.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <div className="conteneur_body">
        <Leftsidebar />
        <Switch>
        <Route path="/references">        
        <div className="Body_read_references" >
            <Top_array_references />
            <Array_references />
        </div>
        </Route>
        <Route path="/addreferences">
        </Route>
        </Switch>
      </div>
      </div>
    </Router>
  )
}

export default App;
