import { useEffect, useState } from 'react'
import Apireadallreferences from '../../../Services/ApiReadAllReference'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/* Essai pour les Card */

function CardReferences() {

    const [allreferences, setAllreferences] = useState([]);
    const fetchData = async () => {
        const data = await Apireadallreferences()
        setAllreferences(data)
    }
    useEffect(() => {
        fetchData()
    }, []);

  return (
        <div> 
            {(allreferences?.account_reference || []).map(references => (
                        <Card sx={{ maxWidth:'275px', maxHeight:'275px' }} >
                            <CardContent >
                                <Typography sx={{ fontSize: 18 }} color="black" >
                                    {references.refCompany}
                                </Typography>
                                <Typography sx={{ fontSize: 12 }} color="black" >
                                    {references.refTitle}
                                </Typography>
                            </CardContent>
                        </Card>
                        ))}
        </div>            

    )         
}

export default CardReferences