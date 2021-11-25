import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ReferenceParameter from './ReferenceParameter';
import ConfidentialityParameter from './ConfidentialityParameter';
import MySociety from './MySociety';
import MyProfil from './MyProfil';
import Access from './Access';

function Parameters() {

const DivBody = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction:column;
align-items:center;
margin:10px;
`
const DivTopMenu = styled.div`
display: flex;
height: 15%;
width: 85%;
align-items:center;
padding-top:30px;
`
const DivBodyParameter = styled.div`
display: flex;
height: 85%;
width: 85%;
align-items:center;
background-color:lightgrey;
padding-top:30px;
`
const LinkMenu = styled(NavLink)`
text-Decoration:none; 
display:flex; 
width:10%;
align-items:center; 
justify-content:center;
border-radius:12px;
margin-top:10px; 
margin-bottom:10px;
padding:6px;
padding-left:10px ;
&.active {
background:linear-gradient(to right, #6DBAC4, #178C9A);
opacity:0.9;
}
`
const MenuNav = styled.nav`
display: flex;
justify-content:center;
align-items:center
`
const DivText = styled.div`
display: flex;
width: 100%;
font-size: 12px;
color: black;
background-color:'red';
padding-left:10px
`
    return (
        <DivBody>
            <DivTopMenu>
                    <LinkMenu to="/mysociety"  > 
                        <DivText>Ma société</DivText> 
                    </LinkMenu>
                     <LinkMenu to="/myprofil" > 
                        <DivText>Mon profil</DivText>
                     </LinkMenu>
                     <LinkMenu to="/confidentiality"> 
                        <DivText>Confidentialité</DivText> 
                     </LinkMenu>
                     <LinkMenu to="/utilisateurs"> 
                        <DivText>Utilisateurs</DivText>
                     </LinkMenu>
                     <LinkMenu to="/references"> 
                        <DivText>Références</DivText>
                     </LinkMenu>
            </DivTopMenu>
            <DivBodyParameter>
                <Switch>
                    <Route path="/mysociety">  
                        <MyProfil/>
                    </Route>

                    <Route path="/myprofil">
                        <MySociety />
                    </Route>

                    <Route path="/confidentiality">
                        <ConfidentialityParameter />
                    </Route>

                    <Route path="/utilisateurs">
                        <Access />
                    </Route>
                    
                    <Route path="/references">
                        <ReferenceParameter />
                    </Route>
                </Switch>
            </DivBodyParameter>
        </DivBody>
    )
}

export default Parameters