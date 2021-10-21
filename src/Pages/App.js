import Header from '../components/Header/Header'
import Leftsidebar from '../components/Left-SideBar/Leftsidebar';
import ReadAllReferences from '../components/Body/ReadAllReferences/ReadAllReferences'
import Error from '../components/Body/Error';
import Box from '@mui/material/Box';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
          <Header />

          <Box sx={{width: '100%', height: 'calc(100vh - 50px)',  display: 'flex'}}>
            
            <Box sx={{width: '4%',  display: 'flex'}}>
              <Leftsidebar />
            </Box>

          <Box sx={{width: '100%',height:'100%', padding:'2%', display: 'flex', justifyContent:'center'}}>  
          
            <Switch>
           
              <Route path="/references">  
                <ReadAllReferences />
              </Route>

              <Route path="/addreferences">
              <Box sx={{width: '85%',height:'85%', bgcolor: 'text.disabled', borderRadius: '10px',  display: 'flex'}} />
              </Route>

              <Route path="/catalogue">
              <Box sx={{width: '85%',height:'85%', bgcolor: 'text.disabled', borderRadius: '10px',  display: 'flex'}} />
              </Route>

              <Route path="/parameters">
              <Box sx={{width: '85%',height:'85%', bgcolor: 'text.disabled', borderRadius: '10px',  display: 'flex'}} />
              </Route>

              <Route>
              <Box sx={{width: '85%',height:'85%', bgcolor: 'text.disabled', borderRadius: '10px',  display: 'flex'}} >
                <Error />
              </Box>
              </Route>
          
            </Switch>

            </Box>
            </Box>
    </Router>
  )
}

export default App;
