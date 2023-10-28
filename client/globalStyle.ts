import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
