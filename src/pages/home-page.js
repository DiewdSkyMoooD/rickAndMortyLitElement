import { LitElement, html } from "lit-element";
import styles from "./home-page-styles.js";
import "../components/character-card/character-card.js";
import "../components/favorite-characters/favorite-characters.js";
class HomePage extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      persons: { type: Array },
      favorites: { type: Array },
      modalIsOpen: { type: Boolean },
      apiUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.persons = [];
    this.favorites = [];
    this.modalIsOpen = false;
    this.apiUrl = "https://rickandmortyapi.com/api/character";
  }

  firstUpdated() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && this.apiUrl != null) {
        this.getPersons();
      }
    });
    this.observer.observe(this.shadowRoot.getElementById("sentinel"));
  }

  getPersons() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.apiUrl = data.info.next;
        let dataModify = data.results.map((person) => {
          return { ...person, favorite: false };
        });
        this.persons = [...this.persons, ...dataModify];
      });
  }

  modifyFavorites(event) {
    const { detail } = event;
    this.persons = this.persons.map((element) => {
      if (element.id === detail.id)
        return { ...element, favorite: !element.favorite };
      return element;
    });
    let [newFav] = this.persons.filter((element) => element.id == detail.id);
    let existFav = this.favorites.find((element) => element.id === detail.id);
    if (existFav == null) return (this.favorites = [...this.favorites, newFav]);
    return (this.favorites = this.favorites.filter(
      (element) => element.id !== detail.id
    ));
  }

  openCloseModal() {
    this.modalIsOpen = !this.modalIsOpen;
  }

  render() {
    return html`
      <header>
        <p class="header-title">Rick y Morty</p>
        <button class="favorites" @click="${this.openCloseModal}">
          Ver Favoritos
        </button>
      </header>

      <div class="persons">
        ${this.persons.map(
          (person) =>
            html`
              <character-card
                .person="${person}"
                @modify-favorites="${(event) => this.modifyFavorites(event)}"
              ></character-card>
            `
        )}
      </div>

      <div class="modal ${this.modalIsOpen ? "show" : ""}">
        <div class="modal-content">
          <div class="title-fav">
            <p>❤️ Favoritos</p>
            <span class="close" @click="${this.openCloseModal}">&times;</span>
          </div>

          <favorite-characters
            .favorites="${this.favorites}"
            @modify-favorites-fav="${(event) => this.modifyFavorites(event)}"
          ></favorite-characters>
        </div>
      </div>

      <div id="sentinel"></div>
    `;
  }
}

customElements.define("home-page", HomePage);
