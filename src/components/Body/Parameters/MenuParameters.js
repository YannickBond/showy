import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MySociety from './MySociety';
import MyProfil from './MyProfil';
import AccessParameter from './Access';
import ConfidentialityParameter from './ConfidentialityParameter';
import ReferenceParameter from './ReferenceParameter';
import * as React from 'react';

  function TabPanel(props) {
    
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function MenuParameters() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
const DivMenu = styled.div`
border-bottom: 1px;
border-color: divider;
display: flex;
`
const DivTaMere = styled.div`
height: 100%;
display: flex;
`
    return (
      <DivTaMere >
        <DivMenu >
          <Tabs  value={value} onChange={handleChange}  >
            <Tab sx={{fontSize:'10px',}} label="Mon profil" {...a11yProps(0)} />
            <Tab sx={{fontSize:'10px'}} label="Société" {...a11yProps(1)} />
            <Tab sx={{fontSize:'10px'}} label="Accès" {...a11yProps(2)} />
            <Tab sx={{fontSize:'10px' }} label="Références" {...a11yProps(3)} />
            <Tab sx={{fontSize:'10px'}} label="Confidentialité" {...a11yProps(4)} />
          </Tabs>
        </DivMenu>

        <TabPanel value={value} index={0}>
          <MyProfil />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <MySociety />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <AccessParameter />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <ReferenceParameter />
        </TabPanel>

        <TabPanel value={value} index={4}>
        <ConfidentialityParameter />
        </TabPanel>
      </DivTaMere>
    );
  }

