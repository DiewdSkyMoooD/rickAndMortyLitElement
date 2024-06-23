import { css } from "lit-element";

export default css`
  .character-card {
    max-width: 200px;
    height: 320px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .add-favorite {
    border: solid 2px green;
    border-radius: 10px;
    height: 30px;
    cursor: pointer;
  }

  .name {
    text-align: center;
    height: 48px;
    margin: 8px 0 0 0;
    font-size: 20px;
  }

  img {
    height: 200px;
    width: 200px;
  }

  .info {
    display: flex;
    justify-content: space-around;
  }

  .info p {
    margin: 8px 0;
  }

  .favorite-icon {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    padding: 5px;
    top: 0;
    right: 0;
  }
`;
