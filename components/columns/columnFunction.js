const getColumns = async() => {
    const url = 'http://localhost:3000/'

    //Set up of communcations
    var request = new XMLHttpRequest();

    //GET Request of columns
    try {
        request.open('GET', `${url}columns`)
        request.send();
        console.log("got data")
    } catch (Err) {
        console.log(Err)
    }
    
    //Recevied Data from Request
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            console.log(request.response)
            }
    }
}

    //POST Request to column
const addColumn = () => {
    const url = 'http://localhost:3000/'

    //Set up of communcations
    var request = new XMLHttpRequest();

    //GET Request of columns
    try {
        request.open('POST', `${url}columns`)
        request.setRequestHeader("content-type", "application/json")

        // Data
        const data = {
            "title": "NEWNEWNEW" 
        }

        request.send(JSON.stringify(data));

        console.log("sent data")
    } catch (Err) {
        console.log(Err)
    }
}

    //PUT Request to update column

    //DELETE Request to delete column




getColumns();
addColumn();