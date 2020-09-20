import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box}
  body {
    margin: 20px;
    background: #OOO;
    font-family: "Century Gothic", helvetica, arial, sans-serif;
    font-size: 1.2em;
    color: #0f1f46;
  }
  h1 {
    margin: 0 0 1em;
    color: #0f1f46;
    text-align: left;
    font-family: georgia, "trebuchet ms", arial, serif;
  }
`;

export default GlobalStyle;