
import Arrayreference from './Arrayreference'

function Apireadreference(e) {
    e.preventDefault();
    const url = 'https://showy.hasura.app/api/rest/addref';  
    let arrayreference = [];
    let fetchData = {
            method: 'GET',
            headers: new Headers({
              'content-type': 'application/json', 
              'x-hasura-access-key': 'uMuvbjXx2y7q5aF5A660A7vRYPiSMsq0zYZGlujeVTrSmYWb5TmzCW5xBLVdEPvy'
            }),
          }

    return (
        
        fetch(url, fetchData)
        .then(function (response) {
            if (response.ok) {
                return response.json()
             }
        })
        .then(function (value) {
            return <Arrayreference props = {value} />
        })
    )
}

export default Apireadreference