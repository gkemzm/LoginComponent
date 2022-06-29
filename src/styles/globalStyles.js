import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 html {
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    font-size: 62.5%;
    margin: 0;
    background-color: rgb(250, 250, 250);
  }

`;

export default GlobalStyles;
