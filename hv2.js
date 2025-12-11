class BotpressWebchat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this._loaded) return;
    this._loaded = true;

    // Botpress container inside shadow root
    const container = document.createElement("div");
    container.id = "bp-embedded-webchat";
    this.shadowRoot.appendChild(container);

    // Botpress inject script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
    script1.async = true;
    this.shadowRoot.appendChild(script1);

    // Botpress config script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/12/10/22/20251210223044-P2TZOC4V.js";
    script2.defer = true;
    this.shadowRoot.appendChild(script2);
  }
}

customElements.define("botpress-webchat", BotpressWebchat);
