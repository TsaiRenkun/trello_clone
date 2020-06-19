const render = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    dragDrop();
    getColumns();
    getCard();
}

render();