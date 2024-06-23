import { LitElement, html, nothing } from "lit-element";
import styles from "./character-card-styles.js";

export class CharacterCard extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      person: { type: Object },
    };
  }

  constructor() {
    super();
    this.person = {};
  }

  //event custom and send info
  changeFavorite() {
    this.dispatchEvent(
      new CustomEvent("modify-favorites", {
        detail: this.person,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="character-card">
        ${this.person.favorite
          ? html`
              <span class="favorite-icon">❤️</span>
            `
          : nothing}
        <img src="${this.person.image}" />
        <p class="name">${this.person.name}</p>
        <div class="info">
          <p>${this.person.species}</p>
          <p>${this.person.gender}</p>
        </div>
        <button class="add-favorite" @click="${this.changeFavorite}">
          ${this.person.favorite ? "Quitar de favorito" : "Añadir a favorito"}
        </button>
      </div>
    `;
  }
}

customElements.define("character-card", CharacterCard);
