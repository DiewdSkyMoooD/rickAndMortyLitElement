import { css } from "lit-element";

export default css`
  .persons {
    margin-top: 24px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-items: center;
  }

  .without-favorites {
    text-align: center;
    font-size: 24px;
  }
`;
