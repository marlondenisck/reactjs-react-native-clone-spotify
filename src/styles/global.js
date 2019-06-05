import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline:0;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html, body, #root {
    height:100%;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background:#181818;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
  }
`;
export default GlobalStyle;
