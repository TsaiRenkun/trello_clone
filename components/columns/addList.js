class addList extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = ``;
    }
  }

  get id() {
    return this.getAttribute("id");
  }

  get title() {
    return this.getAttribute("title");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = `
        <style>
        p {
            display: flex;
            font-size: 20px;
            font-weight: 600;
            padding-left: 5px;
            margin-top: 2px;
        }

        form {
            padding: 5px
        }
        </style>

       
            <p>Add Column</p>
            <form id ="add-col">
                <input type="text" required placeholder="Enter column title"/>
                <button>ADD</button>
            <form>
      
        `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define("add-list", addList);
