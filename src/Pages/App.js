import Header from '../components/Header/Header';
import Leftsidebar from '../components/Left-SideBar/Leftsidebar';
import ReadAllReferences from '../components/Body/ReadAllReferences/ReadAllReferences'
import AddReference from '../components/Body/AddReference/AddReference';
import Catalogue from '../components/Body/Catalogue/Catalogue';
import TemplateReference from '../components/Body/Reference/TemplateReference'
import Box from '@mui/material/Box';
import Parameters from '../components/Body/Parameters/Parameters';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../Services/Theme';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

/* Conteneur de la page */
const DivPage = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  width: 100%;
  align-items:center;
  background-color : ${props => props.theme.background};
  `

  return (
    <ThemeProvider theme={theme}>
    <Router>
          <Header />
          <DivPage>
            <Leftsidebar />
          
            <Switch>
           
              <Route path="/references">  
                <ReadAllReferences />
              </Route>

              <Route path="/addreferences">
                <AddReference />
              </Route>

              <Route path="/catalogue">
                <Catalogue />
              </Route>

              <Route path="/parameters">
                <Parameters />
              </Route>

              <Route>
                <TemplateReference/>
              </Route>
          
            </Switch>

            </DivPage>
    </Router>
  </ThemeProvider>
  )
}

export default App;
