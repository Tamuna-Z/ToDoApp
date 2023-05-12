import { createGlobalStyle } from "styled-components";
import "typeface-russo-one";
const GlobalStyled =createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #EBEFF2;
    font-family: 'Inter',sans-serif;
  }
  body {
    font-family: "Russo One", sans-serif;
  }
  

`;
export default GlobalStyled;