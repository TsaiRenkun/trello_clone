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

        var addButton = document.createElement("span");
        addButton.className = `col${colArray[i].id}`
        addButton.id = i
        addButton.classList.add("addbutton");
        addButton.innerText = "+ Add a Card";

        var cardBox = column.shadowRoot.querySelector(".card");
        cardBox.appendChild(addButton);

        addButton.addEventListener("click", (e) => {
          removeAddButton(cardBox,e);
          removeSpan(cardBox,e);
          var cancelButton = cardBox.querySelector(".cancel");
          cancelButton.addEventListener("click", (e) => {
            removeAll(cardBox);
            appendBackAdd(cardBox);
          });
        });
      }
    }
  }
  addColumn();

  function removeAddButton(cardBox,e) {
    const columnId = JSON.parse(e.target.id) + 1
    const form = document.createElement("form");
    const input = document.createElement("input");
    const textbox = document.createElement("textarea");
    const cancel = document.createElement("span");
    const addButton = document.createElement("button");
  
    addButton.className = "addbutton";
    addButton.classList.add("clicked");
    addButton.innerText = "+ Add Card";
  
    cancel.innerText = " X ";
    cancel.className = "cancel";
  
    input.setAttribute("placeholder", "Enter title");
    input.setAttribute("required", "true");
    textbox.setAttribute("placeholder", "Enter description");
    textbox.setAttribute("required", "true");
  
    form.appendChild(input);
    form.appendChild(textbox);
  
    form.appendChild(addButton);
    form.appendChild(cancel);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let title = e.target.elements[0].value
        let body = e.target.elements[1].value
        //post request for new cards
        addCard(title, columnId, body);

    })
  
    cardBox.appendChild(form);
  }

  function addCard(title, column_id, body) {
    let request = new XMLHttpRequest();

    request.open("POST", "http://localhost:3000/cards", true);
    request.setRequestHeader("content-type", "application/json");

    const data = {
        "title": title,
        "column_id": column_id,
        "description": body
    }

    request.send(JSON.stringify(data));

    setTimeout(() => {
        render();
    }, 100)
}
  
  function removeSpan(cardBox) {
    console.log(cardBox.firstChild);
    cardBox.removeChild(cardBox.firstChild);
  }
  
  function removeAll(cardBox) {
    var child = cardBox.querySelector("form");
    cardBox.removeChild(child);
  }
  
  function appendBackAdd(cardBox) {
    var addButton = document.createElement("span");
    addButton.className = "addbutton";
    addButton.innerText = "+ Add a Card";
    cardBox.appendChild(addButton);
  }
  
};

//POST Request to column
const addColumn = () => {
  var addingList = document.createElement("add-list");
  addingList.className = "list";
  const main = document.querySelector("main");
  main.appendChild(addingList);

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

      var data = {
        title: title,
      };

      request.send(JSON.stringify(data));

      setTimeout(() => {
        render();
      }, 200);
    });
};




//PUT Request to update column

//DELETE Request to delete column

