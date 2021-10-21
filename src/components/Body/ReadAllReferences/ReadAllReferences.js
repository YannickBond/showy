import Grid from '@mui/material/Grid';
import TableReferences from './TableReferences'
import TypeView from './TypeView'
import FilterByStatusReferences from './FilterByStatusReferences'

function ReadAllReferences() {

    return (
            <Grid container columns={16} >
                <Grid height='10%' item xs={2} padding='2%' > <TypeView/> </Grid>
                <Grid height='10%' item xs={10} padding='2%'> <FilterByStatusReferences/> </Grid>
                <Grid height='10%' item xs={4} padding='2%' style={{backgroundColor:"green"}}> </Grid>
                <Grid item height='90%' xs={16} padding='2%'> <TableReferences/> </Grid>
            </Grid>
    )
}

export default ReadAllReferences