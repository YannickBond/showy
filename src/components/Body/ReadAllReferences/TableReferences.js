import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import Apireadallreferences from '../../../Services/ApiReadAllReference'

function TableReferences() {

    const [allreferences, setAllreferences] = useState([]);
    const fetchData = async () => {
        const data = await Apireadallreferences()
        setAllreferences(data)
    }
    useEffect(() => {
        fetchData()
    }, []);

    const columns=[
        {title:'Nom du Client',field:'Nomduclient'},
        {title:'Titre de la référence',field:'Titredelareference'},
        {title:'Budget',field:'Budget'},
        {title:'Année',field:'Annee'},
        {title:'Entité',field:'Entite'},
        {title:'Type de mission',field:'Typedemission'},
        {title:'Technologie',field:'Technologie'},
        {title:'Statut',field:'Statut'}, ]
    
    const tabledata = (allreferences?.account_reference || []).map(
        reference => ({
            Nomduclient: reference.refCompany, 
            Titredelareference: reference.refTitle, 
            Budget: reference.refBudget, 
            Annee: reference.refDate, 
            Entite: reference.speEntityCompany, 
            Typedemission: reference.speTypemission, 
            Technologie: reference.speTechnology, 
            Statut: reference.statut 
        })
    )
 
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

export default TableReferences