class BotpressWebchat extends HTMLElement {
  connectedCallback() {
    // Prevent duplicate loads
    if (this._loaded) return;
    this._loaded = true;

    // Create the internal container where Botpress will mount the chat
    const container = document.createElement("div");
    container.id = "bp-embedded-webchat";
    this.appendChild(container);

    // Load Botpress webchat inject script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
    script1.async = true;
    container.appendChild(script1);

    // Load your specific Botpress config script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/12/10/22/20251210223044-P2TZOC4V.js";
    script2.defer = true;
    container.appendChild(script2);
  }
}

// Register the custom element
customElements.define("botpress-webchat", BotpressWebchat);
