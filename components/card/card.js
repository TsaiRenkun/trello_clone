class Card extends HTMLElement {
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

  get description() {
    return this.getAttribute("description");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = `
          <style>
          p {
            clear: both;
            display: block;
            margin: 0 0 4px;
            overflow: hidden;
            text-decoration: none;
            word-wrap: break-word;
            color: #172b4d;
          } 

          h4 {
              margin:0px
          }

          div {
            padding: 5px;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(9,30,66,.25);
            cursor: pointer;
            display: block;
            margin-bottom: 8px;
            max-width: 300px;
            min-height: 20px;
            position: relative;
            text-decoration: none;
            z-index: 0;
          }
          </style>

          <div>
            <h4>${this.title}</h4>
            <p>${this.description}</p>
          </div>
          `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define("show-card", Card);
