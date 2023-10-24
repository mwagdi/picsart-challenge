import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../contexts';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const initialState = window.__INITIAL_STATE__ || { theme: 'light' };

hydrateRoot(
  rootElement,
  <BrowserRouter>
    <ThemeProvider initialState={initialState}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
