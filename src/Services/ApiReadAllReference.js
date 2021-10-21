const Apireadallreferences = async () => {  
    const url = 'https://showy.hasura.app/api/rest/addref';  
    let fetchData = {
            method: 'GET',
            headers: new Headers({
              'content-type': 'application/json', 
              'x-hasura-access-key': 'uMuvbjXx2y7q5aF5A660A7vRYPiSMsq0zYZGlujeVTrSmYWb5TmzCW5xBLVdEPvy'
            }),
          }

    const response = await fetch(url, fetchData)

    return response.ok ? response.json() : {message: 'sucemab***'}
};
export default Apireadallreferences