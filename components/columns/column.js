class Column extends HTMLElement {
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

        .addbutton {
            color: #5e6c84;
            
        }

        .addbutton:active {
            background-color: #5aac44;
            box-shadow: none;
            border: none;
            color: #fff;
          }

        

        </style>

            <p>${this.title}</p>
            <div class="card"></div>
        `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define("show-column", Column);
