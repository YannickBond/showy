
import styled from 'styled-components'
import ConstructionIcon from '@mui/icons-material/Construction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

  const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;

  `


function Leftmenu() {

    return (
        <MenuNav>
            <Link to="/references"> <ArticleIcon sx={{ color: 'white', fontSize: 26, padding:'20px' }}/> </Link>
            <Link to="/addreferences"> <AddCircleOutlineIcon sx={{ color: 'white', fontSize: 26 , padding:'20px'}}/></Link>
            <Link to="/catalogue"> <AutoStoriesIcon sx={{ color: 'white', fontSize: 26 , padding:'20px'}} /> </Link>
            <Link to="/parameters"> <ConstructionIcon sx={{ color: 'white', fontSize: 26 , padding:'20px'}} /> </Link>
        </MenuNav>
    )
}

export default Leftmenu