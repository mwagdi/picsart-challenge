import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../contexts';
import { ThemeContextType } from '../types';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

declare global {
  interface Window {
    __APOLLO_STATE__: NormalizedCacheObject;
    __INITIAL_STATE__: ThemeContextType;
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const initialState = window.__INITIAL_STATE__ || { theme: 'light' };

hydrateRoot(
  rootElement,
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider initialState={initialState}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
);
