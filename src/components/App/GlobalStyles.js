import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    background-color: #c0dbff;
  }
  .report-content {
    background-color: #fff;
    padding: 30px;
    border: 1px solid #444;
    border-radius: 20px;

    table {
      width: 100%;
      margin: 30px 0 40px;

      td,
      th {
        border: 1px solid #444;
        padding: 10px;
      }

      th {
        background-color: #ddd;
        font-weight: bold;
      }
    }
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
