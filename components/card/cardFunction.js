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
      if(request.readyState == 4){
        
        const cardsArray = JSON.parse(request.response);
        console.log("HELLO cards")
        for(let i = 0; i < cardsArray.length ; i++){
            console.log(cardsArray[i].id)
            
            const column = document.querySelector(`#col${cardsArray[i].column_id}`);
            const card = document.createElement('show-card');
            
            console.log(column.shadowRoot)
            card.setAttribute("id", cardsArray[i].id);
            card.setAttribute("title", cardsArray[i].title)
            card.setAttribute("description", cardsArray[i].description)

            column.shadowRoot.querySelector(".card").append(card)
        }
    
          
          

        
      }
  }
};

//POST CARDS

//PUT CARDS

//DELETE CARDS
