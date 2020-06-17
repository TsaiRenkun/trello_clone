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

  get body() {
    return this.getAttribute("body");
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
  
          </style>

          <div>
            <h4>${this.title}</h4>
            <p>${body}</p>
          </div>
          `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define("show-card", Card);
