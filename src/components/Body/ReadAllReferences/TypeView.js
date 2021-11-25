
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import {Link} from "react-router-dom";

/* Bout de code non fonctionnel pour le toggle entre View en Card ou View en Table */
function TypeView() {

const [view, setView] = useState('list');

const handleChange = (event, nextView) => {
      setView(nextView);
    };

    return (

        <ToggleButtonGroup
        orientation="horyzontal"
        value={view}
        exclusive
        onChange={handleChange}
        >
        
            <ToggleButton size='small' value="list" aria-label="list" >
                <Link to="/references/list"> <ViewHeadlineIcon sx={{color:"#178C9A"}} /> </Link>
            </ToggleButton>

            <ToggleButton size='small' value="card" aria-label="module">
                <Link to="/references/card"> <ViewModuleIcon sx={{color:"black"}} /> </Link>
            </ToggleButton>

        </ToggleButtonGroup>
    )
}

export default TypeView

