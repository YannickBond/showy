import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {NavLink} from 'react-router-dom';
import logoshowy from '../../assets/logo_showy.svg'
import { useState } from 'react';

function Leftsidebar() {

const [size,setSize] = useState('small')

const changeSize = () => {
    setSize(size === 'small' ? 'large' : 'small')
}

const MenuStyle = styled.div`
display: flex;
height:92%;
border-radius:15px;
margin-left:10px;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${size === 'small'? '4%' : '12%'};
background: #3E3D40;
border: solid white 1px;
`
const IconeExtension = styled.div`
display: flex;
height: 10%;
width: 100%;
align-items: center;
justify-content: ${size === 'small'? 'center' : 'end'};
`
const MenuNav = styled.nav`
display: flex;
flex-direction: column;
height: 80%;
width: 100%;
justify-content:center;
align-items:${size === 'small'? 'center' : 'center'};
`
const LogoShowyImg = styled.img`
height:20px;
`
const DivShowy = styled.div`
display: flex;
height: 10%;
width: 100%;
align-items: center ;
justify-content: center;
border-top : grey solid 1px;
`
const DivText = styled.div`
display: ${size === 'small'? 'none' : 'flex'};
width: 100%;
font-size: 12px;
color: white;
background-color:'red';
padding-left:10px
`
const DivTextShowy = styled.div`
display: ${size === 'small'? 'none' : 'flex'};
width: 100%;
font-size: 12px;
font-style: italic;
font-weight: bold;
color: white;
background-color:'red';
padding-left:10px
`

const LinkMenu = styled(NavLink)`
text-Decoration:none; 
display:flex; 
width:${size === 'small'? '' : '80%'};
align-items:center; 
justify-content:center;
border-radius:${size === 'small'? '12px' : '14px'};
margin-top:10px; 
margin-bottom:10px;
padding:6px;
padding-left: ${size === 'small'? '' : '12px'} ;
&.active {
background:${props => props.theme.primary};
opacity:0.9;
}
`

    return (
            <MenuStyle>
                <IconeExtension>
                    <CodeIcon onClick={changeSize} sx={{ color: 'white', fontSize: 20 , padding:'10px'}} alt="Icone pour étendre le menu latéral gauche"/>
                </IconeExtension>
                <MenuNav>
                     <LinkMenu to="/references"  > 
                        <ArticleIcon sx={{ color: 'white', fontSize: 18}}/> 
                        <DivText>Références</DivText> 
                    </LinkMenu>
                     <LinkMenu to="/addreferences" > 
                        <AddCircleOutlineIcon sx={{ color: 'white', fontSize: 18}}/>
                        <DivText>Ajouter</DivText>
                     </LinkMenu>
                     <LinkMenu to="/catalogue"> 
                        <AutoStoriesIcon sx={{ color: 'white', fontSize: 18}} />
                        <DivText>Catalogues</DivText> 
                     </LinkMenu>
                     <LinkMenu to="/parameters"> 
                        <ConstructionIcon sx={{ color: 'white', fontSize: 18}} /> 
                        <DivText>Paramétres</DivText>
                     </LinkMenu>
                     <LinkMenu to="/importexport"> 
                        <ImportExportIcon sx={{ color: 'white', fontSize: 18}} /> 
                        <DivText>Import-Export</DivText>
                     </LinkMenu>
                </MenuNav>
                <DivShowy >
                    <LogoShowyImg src={logoshowy} alt="Logo de l'éditeur Showy"/>
                    <DivTextShowy>Showy</DivTextShowy>
                 </DivShowy>
            </MenuStyle>
    )
}

export default Leftsidebar