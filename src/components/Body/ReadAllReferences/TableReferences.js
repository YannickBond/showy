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
        {title:'Nom du Client',field:'Nomduclient',width:'80'},
        {title:'Titre de la référence',field:'Titredelareference'},
        {title:'Budget',field:'Budget',width:'40'},
        {title:'Année',field:'Annee'},
        {title:'Entité',field:'Entite'},
        {title:'Type de mission',field:'Typedemission',width:'40'},
        {title:'Technologie',field:'Technologie', width:'40'},
        {title:'Statut',field:'Statut', width:'40'} ]
    
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
                headerStyle: { background:"#EB7046",fontSize:11, color:'white', borderBlock:'10px'},
                rowStyle: {fontSize:10}
        }}  />
           
    )
}

export default TableReferences