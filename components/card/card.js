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
