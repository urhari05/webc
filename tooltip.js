class ToolTip extends HTMLElement {
  constructor() {
    super();
    console.log("It is working");
    this._tootlTipContainer;
  }

  connectedCallback() {
    const toolTipIcon = document.createElement("span");
    toolTipIcon.textContent = " (?)";
    toolTipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.appendChild(toolTipIcon);
  }
  _showToolTip() {
    this._tootlTipContainer = document.createElement("div");
    this._tootlTipContainer.textContent = "this is tooltip text";
    this.appendChild(this._tootlTipContainer);
  }
  _hideToolTip() {
    this.removeChild(this._tootlTipContainer);
  }
}

customElements.define("hs-tooltip", ToolTip);
