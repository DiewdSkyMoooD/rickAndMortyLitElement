import { LitElement, html } from "lit-element";
import styles from "./favorite-characters-styles.js";
import "../character-card/character-card.js";
export class FavoriteCharacters extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      favorites: { type: Array },
    };
  }

  constructor() {
    super();
    this.favorites = [];
  }

  modifyFavorites(event) {
    this.dispatchEvent(
      new CustomEvent("modify-favorites-fav", {
        detail: event.detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      ${this.favorites.length > 0
        ? html`
            <div class="persons">
              ${this.favorites.map(
                (person) =>
                  html`
                    <character-card
                      .person="${person}"
                      @modify-favorites="${(event) =>
                        this.modifyFavorites(event)}"
                    ></character-card>
                  `
              )}
            </div>
          `
        : html`
            <p class="without-favorites">Aún no hay favoritos</p>
          `}
    `;
  }
}

customElements.define("favorite-characters", FavoriteCharacters);
