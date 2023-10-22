import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

hydrateRoot(
  rootElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
