import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    background-color: #c0dbff;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .container {
    max-width: 90vw;
  }

  textarea {
    resize: none;
  };

  a {
    font-size: 16px;
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyles;
