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
  
  a {
    color: unset;
    text-decoration: none;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 600ms ease-in;
  }

  .fade-exit {
    opacity: 0;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 600ms ease-in;
  }
`;

export default GlobalStyle;
