class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tootlTipContainer;
    this._toolTipText = "Som dummy tooltip text";
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._toolTipText = this.getAttribute("text");
    }
    const toolTipIcon = document.createElement("span");
    toolTipIcon.textContent = " (?)";
    toolTipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.shadowRoot.appendChild(toolTipIcon);
    this.style = "relative";
  }
  _showToolTip() {
    this._tootlTipContainer = document.createElement("div");
    this._tootlTipContainer.textContent = this._toolTipText;
    this._tootlTipContainer.style.backgroundColor = "black";
    this._tootlTipContainer.style.color = "white";
    this._tootlTipContainer.style.position = "absolute";
    this._tootlTipContainer.style.zIndex = 10;
    this.shadowRoot.appendChild(this._tootlTipContainer);
  }
  _hideToolTip() {
    this.shadowRoot.removeChild(this._tootlTipContainer);
  }
}

customElements.define("hs-tooltip", ToolTip);
