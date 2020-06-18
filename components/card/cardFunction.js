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
        }
      }
    }
  }
};

//PUT CARDS

//DELETE CARDS

//ADD CARDS
