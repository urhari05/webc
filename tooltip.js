class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tootlTipContainer;
    this._toolTipText = "Som dummy tooltip text";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
        div {
            background-color: black;
            color: white;
            position: absolute;
            zIndex: 10;   
        }
    </style>
    <slot>Some Default</slot> <span>(?)</span>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._toolTipText = this.getAttribute("text");
    }
    const toolTipIcon = this.shadowRoot.querySelector("span");
    toolTipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.shadowRoot.appendChild(toolTipIcon);
    this.style = "relative";
  }
  _showToolTip() {
    this._tootlTipContainer = document.createElement("div");
    this._tootlTipContainer.textContent = this._toolTipText;
    this.shadowRoot.appendChild(this._tootlTipContainer);
  }

  _hideToolTip() {
    this.shadowRoot.removeChild(this._tootlTipContainer);
  }
}

customElements.define("hs-tooltip", ToolTip);
