import MaterialTable from 'material-table'
import '../Body_read_references.css'
import { useEffect, useState } from 'react'
import Apireadreference from './Apireadreference'

function Array_references() {
    
    const [allreferences, setAllreferences] = useState([]);
    useEffect(() => {
        setAllreferences(Apireadreference)
         }, []);

    const columns=[
        {title:'Nom du Client',field:'NomduClient'},
        {title:'Titre de la référence',field:'Titredelareference'},
        {title:'Budget',field:'Budget'},
        {title:'Année',field:'Annee'},
        {title:'Entité',field:'Entite'},
        {title:'Type de mission',field:'Typedemission'},
        {title:'Technologie',field:'Technologie'},
        {title:'Statut',field:'Statut'}, ]
    
    const tabledata= [ allreferences.map((resuslt) =>
    {NomduClient: resuslt.refCompany, Titredelareference: resuslt.refTitle, Budget: resuslt.refBudget, Annee: resuslt.refDate, Entite: resuslt.speEntityCompany, Typedemission: resuslt.speTypeMission, Technologie: result.speTechnology, Statut: resuslt.statut })
]

 
  return (
         <MaterialTable 
            columns={columns} 
            data={tabledata} 
            options={{ 
                paging: false, 
                search: false, 
                showTitle: false, 
                toolbar:false,
                displayheader:false, 
                headerStyle: { background:"#178C9A",fontSize:10, color:'white'},
                rowStyle: {fontSize:10},
                width:1,
        }}  />
           
    )
}

export default Array_references