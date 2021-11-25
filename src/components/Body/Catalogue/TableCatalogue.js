import MaterialTable from 'material-table'

function TableCatalogue() {

    const columns=[
        {title:'Nom du catalogue',field:'Nomducatalogue', headerStyle:{borderTopLeftRadius:20}},
        {title:'Description du catalogue',field:'Descriptionducatalogue'},
        {title:'Public / Privé',field:'PublicPrive'},
        {title:'Année de Création',field:'Annee', headerStyle:{borderTopRightRadius:20}},
    ]

    const tabledata = [
        {
            Nomducatalogue: 'Chatbot Service IT', 
            Descriptionducatalogue: 'Ensemble des références de service IT', 
            PublicPrive: 'Public', 
            Annee: '2021', 
        }
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
                headerStyle: { background:"#EB7046",fontSize:11, color:'white', borderBlock:'10px', width:'100%'},
                rowStyle: {fontSize:10}
        }}  />
           
    )
}

export default TableCatalogue