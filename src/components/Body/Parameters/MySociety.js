import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function MySociety() {

    return (
        <Box component="form" sx={{'& > :not(style)': { m: 2, width: '25ch' },}} >
            <TextField id="outlined-basic" label="Nom de la société" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="url du site de la société" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="a" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="c" variant="outlined" size="small" />
        </Box>
    )
}

export default MySociety