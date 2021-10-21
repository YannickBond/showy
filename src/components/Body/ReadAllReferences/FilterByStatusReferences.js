import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function FilterByStatusReferences() {

const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
    return (
    <Stack direction="row" spacing={1}>
      <Chip label="All" onClick={handleClick} />
      <Chip label="En cours" onClick={handleClick} />
      <Chip label="En validation" onClick={handleClick} />
    </Stack>
    )
}

export default FilterByStatusReferences
