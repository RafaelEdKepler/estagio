import { createGlobalStyle } from "styled-components";
import img from '../public/bg.png';

const GlobalStyle = createGlobalStyle`
  * {
    --primary: #1E1E1E;
    --secondary: #FFFFFF;
  }

  body: {
    margin: 0;
    padding: 0;
    background-image: url(${img});    
    background-size: 100% 100%; 
    height: 100vh;
  }
`;

export default GlobalStyle;