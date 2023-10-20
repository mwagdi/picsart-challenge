import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

hydrateRoot(
  rootElement,
  <StrictMode>
    <App />
  </StrictMode>,
);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
