import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default GlobalStyle;
