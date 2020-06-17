const getColumns = () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of columns

  request.open("GET", `${url}columns`);
  request.send();
  request.addEventListener("readystatechange", displayColumns, false);

  //Recevied Data from Request

  function displayColumns() {
    if (request.readyState == 4) {

      const main = document.querySelector("main");
      const add_List = document.querySelector("add-list");

      const colArray = JSON.parse(request.response);

      //Creating columns from db.json
      for (let i = 0; i < colArray.length; i++) {
        var column = document.createElement("show-column");

        //Display the column

        column.setAttribute("id", colArray[i].id);
        column.setAttribute("title", colArray[i].title);

        column.className = "list";

        main.insertBefore(column, add_List);

        //addCard button
        
        var addButton = document.createElement("button")
        addButton.className = "addbutton";
        addButton.innerText = "Add Card";
        

        var cardBox = column.shadowRoot.querySelector(".card")
        cardBox.appendChild(addButton)
        
      }
    }
  }
  addColumn();
};

//POST Request to column
const addColumn = () => {
  var addingList = document.createElement("add-list");
  addingList.className = "list"
  const main = document.querySelector("main")
  main.appendChild(addingList)

  const url = "http://localhost:3000/";

  //Set up of communcations

  const request = new XMLHttpRequest();

  console.log("HELLO");

  addingList.shadowRoot
    .querySelector("#add-col")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      var title = e.target.elements[0].value;

      request.open("POST", `${url}columns`);
      request.setRequestHeader("content-type", "application/json");

      // Data
      var data = {
        title: title,
      };

      request.send(JSON.stringify(data));

      setTimeout(( ) => {
        render();
      }, 200);
    });
};

//PUT Request to update column

//DELETE Request to delete column

//Connecting my HTML with addcolumn

// var editBut = document.querySelector("")
