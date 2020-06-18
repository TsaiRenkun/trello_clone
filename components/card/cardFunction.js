//GET CARDS
const getCard = () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of cards
  request.open("GET", `${url}cards`);
  request.send();
  request.addEventListener("readystatechange", displayCards, false);

  function displayCards() {
    if (request.readyState === 4 && request.status === 200) {
      const cardsArray = JSON.parse(request.response);
      console.log(cardsArray);

      for (let i = 0; i < cardsArray.length; i++) {
        const column_id = cardsArray[i].column_id;

        const main = document.querySelector("main");

        const column = document
          .querySelector("main")
          .querySelector("#col" + column_id);

        if (column) {
          const cardBox = column.shadowRoot.querySelector(".card");
          const card = document.createElement("show-card");

          card.setAttribute("id", cardsArray[i].id);
          card.setAttribute("title", cardsArray[i].title);
          card.setAttribute("description", cardsArray[i].description);
          card.className = "draggable";
          card.draggable = true;

          cardBox.append(card);

          // console.log(card);

          const parentbox = card.shadowRoot.childNodes[3];
          const dropbutton = card.shadowRoot.querySelector("div").childNodes[1];

          var toggle = 0;

          dropbutton.addEventListener("click", (e) => {
            if (toggle === 0) {
              const popup = document.createElement("p");
              popup.innerHTML = cardsArray[i].description;
              parentbox.appendChild(popup);

              toggle = 1;
            } else {
              const selected = parentbox.lastElementChild;
              parentbox.removeChild(selected);
              toggle = 0;
            }
          });

          const parenttitle = card.shadowRoot.querySelector("div");
          const deleteButton = document.createElement("span");
          deleteButton.innerText = "x";
          deleteButton.className = "delete"
          deleteButton.id = cardsArray[i].id

          const editButton = document.createElement("span");
          editButton.innerText = "~";

          parenttitle.appendChild(editButton);
          parenttitle.appendChild(deleteButton);
          
          deleteCard(deleteButton)
          editCard(cardsArray[i], editButton);
        }
      }
    }
  }

  //PUT CARDS
  function editCard(cardsArray, editButton) {
    editButton.addEventListener("click", (e) => {
      const parentbox = editButton.parentNode;
      parentbox.innerHTML = "";
      const title = cardsArray.title;
      const description = cardsArray.description;
      const card_id = cardsArray.id;
      const columnId = cardsArray.column_id;

      const form = document.createElement("form");
      const input = document.createElement("input");
      const textbox = document.createElement("textarea");
      const newEdit = document.createElement("button");

      form.className = "editing";

      input.value = title;
      input.placeholder = "Edit card title";
      input.required = true;

      textbox.value = description;
      textbox.placeholder = "Edit description";
      textbox.required = true;

      newEdit.innerText = "~";

      parentbox.appendChild(form);
      form.appendChild(input);
      form.appendChild(textbox);
      form.appendChild(newEdit);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = e.target.elements[0].value;
        const description = e.target.elements[1].value;

        let request = new XMLHttpRequest();
        request.open("PUT", "http://localhost:3000/cards/" + card_id, true);
        request.setRequestHeader("content-type", "application/json");

        const data = {
          title: title,
          description: description,
          column_id: columnId,
        };

        console.log(data);

        request.send(JSON.stringify(data));

        setTimeout(() => {
          render();
        }, 100);
      });
    });
  }
};

//DELETE CARDS
function deleteCard(deleteButton) {
    deleteButton.addEventListener("click", function (e) {
        
        const cardId = deleteButton.id;

        //delete request
        let request = new XMLHttpRequest;
        request.open("DELETE", "http://localhost:3000/cards/" + cardId, true);
        request.send();
        request.addEventListener("readystatechange", function () {

            if (request.readyState == 4 && request.status == 200) {
                setTimeout(() => {
                    render();
                }, 50)

            }

        }, false);
    })
}
