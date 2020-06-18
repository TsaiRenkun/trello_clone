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
            width:90%
        }

        p span{
            margin-left: auto;
        }

        p form {
            display: inline-flex;
        }

        input{
            margin: 5px;
        }

        textarea{
            margin: 5px;
        }

        span {
            display: inline-block
            padding-left: 5px;
            color: orange;
        }

        .card{
            padding: 10px;
        }

        .addbutton {
            margin: auto;
            padding-bottom: 10px;
            width:80%;
            color: #5e6c84;
        }

        .addbutton.clicked {
            background-color: #5aac44;
            box-shadow: none;
            border: none;
            color: #fff;
            margin: 5px;
          }

        .editing button{
            margin-left: 50px;
            margin-top: auto;
            margin-bottom: auto;
        }

        p .delete {
            color: red;
        }


        </style>

            <p>${this.title}</p>
            <div class="card"></div>
        `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define("show-column", Column);
