import { createGlobalStyle } from "styled-components";
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
  

`;
export default GlobalStyled;