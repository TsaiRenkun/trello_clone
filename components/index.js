const render = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    getColumns();
    getCard();
}

render();