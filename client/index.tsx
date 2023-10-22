import { hydrateRoot } from 'react-dom/client';

import Home from './components/Home';

const rootElement = document.getElementById('root') as HTMLElement;

hydrateRoot(rootElement, <Home />);
