
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import {Link} from "react-router-dom";

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
        
        <ToggleButton value="list" aria-label="list">
        <Link to="/"> <ViewHeadlineIcon /> </Link>
        </ToggleButton>

        <ToggleButton value="module" aria-label="module">
        <Link to="/"> <ViewModuleIcon /> </Link>
        </ToggleButton>

        </ToggleButtonGroup>
    )
}

export default TypeView

