import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
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
