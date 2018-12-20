class CollapseParagraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <div>
            <button id="mainButton"></button>
            <p><slot></slot></p>
        </div>
        `;
  }

  connectedCallback() {
    let collapsed = this.getAttribute("isCollapsed");
    let buttonLabel = this.getAttribute("buttonLabel");
    let button = this.shadowRoot.querySelector("#mainButton");
    button.innerText = buttonLabel;
    button.addEventListener("click", this._toggleParagraph.bind(this));
    if (collapsed) {
      this.shadowRoot.querySelector("p").style.display = "none";
    }
  }

  _toggleParagraph() {
    let paragraph = this.shadowRoot.querySelector("p");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
}

customElements.define("my-collapse-paragraph", CollapseParagraph);
