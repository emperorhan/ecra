import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    * {
      box-sizing: border-box;
    }
`;

export default GlobalStyle;
