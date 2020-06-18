const getColumns = () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of columns

  request.open("GET", `${url}columns`);
  request.send();
  addColumn();
  request.addEventListener("readystatechange", displayColumns, false);

  //Recevied Data from Request

  function displayColumns() {
    if (request.readyState === 4 && request.status === 200) {
      const main = document.querySelector("main");
      const colArray = JSON.parse(request.response);
      const addCol = document.querySelector("add-list");

      //Creating columns from db.json
      for (let i = 0; i < colArray.length; i++) {
        //Display the column
        const column = document.createElement("show-column");
        column.setAttribute("id", `col${colArray[i].id}`);
        column.setAttribute("title", colArray[i].title);

        column.className = "list";

        main.insertBefore(column, addCol);

        //edit Column Title

        const parenttitle = column.shadowRoot.querySelector("p");
        const editButton = document.createElement("span");
        editButton.innerText = "~";

        parenttitle.appendChild(editButton);

        editBut(colArray[i], editButton);

        //addCard button

        const addButton = document.createElement("span");
        addButton.id = i;
        addButton.className = `addbutton`;
        addButton.innerText = "+ Add a Card";

        addButton.addEventListener("click", (e) => {
          removeAddButton(e, column);
        });

        column.shadowRoot.appendChild(addButton);
      }
    }
  }

  //Removing <span> button to replicit Trello
  function removeAddButton(e, column) {
    console.log(column);
    const parent = e.target.parentNode;

    console.log(parent);
    console.log(e.target);

    parent.removeChild(e.target);

    //creating Form for Add card
    const columnId = JSON.parse(e.target.id) + 1;
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
    cancel.id = e.target.id;

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
      let title = e.target.elements[0].value;
      let body = e.target.elements[1].value;

      //post request for new cards
      addCard(title, columnId, body);

    });

    column.shadowRoot.appendChild(form);

    //adding the X to cancel the card input

    cancel.addEventListener("click", (e) => {
      removeAll(e);
      appendBackAdd(e, column);
    });
  }

  // helper function to remove <form>

  function removeAll(e) {
    const child = e.target.parentNode.parentNode.querySelector("form");
    e.target.parentNode.parentNode.removeChild(child);
  }

  // helper function to append back <span>

  function appendBackAdd(e, column) {
    const addButton = document.createElement("span");

    addButton.id = e.target.id;
    addButton.className = `addbutton`;
    addButton.innerText = "+ Add a Card";

    addButton.addEventListener("click", (e) => {
      removeAddButton(e, column);
    });

    column.shadowRoot.appendChild(addButton);
  }
};

//adding Card
function addCard(title, columnId, body) {
  console.log("ADDINGG");

  let request = new XMLHttpRequest();

  request.open("POST", "http://localhost:3000/cards", true);
  request.setRequestHeader("content-type", "application/json");

  const data = {
    title: title,
    column_id: columnId,
    description: body,
  };

  request.send(JSON.stringify(data));

  setTimeout(() => {
    render();
  }, 100);
}

//Edit Button
function editBut(colArray, editButton) {
  editButton.addEventListener("click", (e) => {
    const parentbox = editButton.parentNode;
    parentbox.innerHTML = "";
    const title = colArray.title;
    const col_id = colArray.id;

    const form = document.createElement("form");
    const input = document.createElement("input");
    const newEdit = document.createElement("button");
    form.className = "editing";

    input.value = title;
    input.placeholder = "Edit column title";
    input.required = true;

    newEdit.innerText = "~";

    parentbox.appendChild(form);
    form.appendChild(input);
    form.appendChild(newEdit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = e.target.elements[0].value;

      let request = new XMLHttpRequest();
      request.open("PUT", "http://localhost:3000/columns/" + col_id, true);
      request.setRequestHeader("content-type", "application/json");

      const data = {
        title: title,
      };

      request.send(JSON.stringify(data));

      setTimeout(() => {
        render();
      }, 100);
    });
  });
}

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
      }, 100);
    });
};

//PUT Request to update column

//DELETE Request to delete column
