const getColumns = async () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of columns
  try {
    request.open("GET", `${url}columns`);
    request.send();
    console.log("got data");
  } catch (Err) {
    console.log(Err);
  }

  //Recevied Data from Request
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log(request.response);
    }
  };
};

//POST Request to column
const addColumn = (title) => {

  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of columns
  try {
    request.open("POST", `${url}columns`);
    request.setRequestHeader("content-type", "application/json");

    // Data
    var data = {
        "title": title,
    };

    request.send(JSON.stringify(data));

    console.log("sent data");
  } catch (Err) {
    console.log(Err);
  }
};

//PUT Request to update column

const editColumn = () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of columns
  try {
    request.open("POST", `${url}columns`);
    request.setRequestHeader("content-type", "application/json");

    // Data
    const data = {
      title: "NEWNEWNEW",
    };

    request.send(JSON.stringify(data));

    console.log("sent data");
  } catch (Err) {
    console.log(Err);
  }
};

//DELETE Request to delete column


//Connecting my HTML with addcolumn

document.getElementById("add-col").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target.elements[0].value)
    var title = e.target.elements[0].value
        addColumn(title);
    var input = document.getElementById("add-col").elements;
    input[0].value = "";

});