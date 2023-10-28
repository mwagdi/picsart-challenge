import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { ThemeProvider } from '@contexts/theme-context';
import { ThemeContextType } from '@projectTypes/theme';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

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
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tasks: {
            merge(_, incoming) {
              return [...incoming];
            },
          },
        },
      },
    },
  }).restore(window.__APOLLO_STATE__),
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
