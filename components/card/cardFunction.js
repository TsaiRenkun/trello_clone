//GET CARDS
const GetCard = () => {
  const url = "http://localhost:3000/";

  //Set up of communcations
  var request = new XMLHttpRequest();

  //GET Request of cards

  request.open("GET", `${url}cards`);
  request.send();
  request.addEventListener("readystatechange", displayCards, false);

  function displayCards() {
    if (request.readyState == 4) {
      const cardsArray = JSON.parse(request.response);
      console.log("HELLO cards");
      for (let i = 0; i < cardsArray.length; i++) {
        console.log(cardsArray[i].id);
        
        const column = document.querySelector(`#col${cardsArray[i].column_id}`);
        console.log(column.shadowRoot, "HERE HERE HERE")
        const card = document.createElement("show-card");

        card.setAttribute("id", cardsArray[i].id);
        card.setAttribute("title", cardsArray[i].title);
        card.setAttribute("description", cardsArray[i].description);

        column.shadowRoot.querySelector(".card").append(card);

        console.log(card);

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
            const selected = parentbox.lastElementChild
            parentbox.removeChild(selected)
            toggle = 0
          }
        });
      }
    }
  }
};

//PUT CARDS

//DELETE CARDS
