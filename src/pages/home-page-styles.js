import { css } from "lit-element";

export default css`
  header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    background-color: black;
  }

  .header-title {
    color: white;
    margin-left: 16px;
    font-size: 24px;
  }

  .favorites {
    margin: auto 16px;
    background-color: black;
    border: solid 1px green;
    border-radius: 10px;
    color: white;
    height: 30px;
    width: 150px;
    cursor: pointer;
  }

  .persons {
    margin-top: 24px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    justify-items: center;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: auto;
    min-width: 70%;
    max-width: 90%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation: animatetop 0.4s;
    overflow-y: scroll;
    height: 80%;
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  .title-fav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-fav p {
    font-size: 24px;
    margin: 8px;
  }
  .close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .show {
    display: flex;
  }

  .modal-content::-webkit-scrollbar {
    width: 12px;
  }
  .modal-content::-webkit-scrollbar-track {
    background: #fefefe;
    border-radius: 10px;
  }
  .modal-content::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 10px;
  }
  .modal-content::-webkit-scrollbar-thumb:hover {
    background: #9c9c9c;
  }
`;
