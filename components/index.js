const render = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    getColumns();
    GetCard();
}

render();