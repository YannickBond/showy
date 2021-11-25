import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function FilterByTypeCatalogue() {


    return (
    <Stack direction="row" spacing={2}>
      <Chip size="small" label="All" sx={{fontSize:10, fontWeight:'bold', minWidth:100, backgroundColor:"#EB7046", color:'white'}}  />
      <Chip size="small" label="Public" sx={{fontSize:10, fontWeight:'bold', minWidth:100, backgroundColor:"#3E3D40", color:'white'}}  />
      <Chip size="small" label="Privé" sx={{fontSize:10, fontWeight:'bold', minWidth:100, backgroundColor:"#3E3D40", color:'white'}} />
    </Stack>
    )
}

export default FilterByTypeCatalogue
