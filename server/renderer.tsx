import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import App from '@client/App';
import { ThemeProvider } from '@contexts/theme-context';
import { ThemeContextType, ThemeOptions } from '@projectTypes/theme';
import { Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const renderer = async (assets: Record<string, string>, url: string, response: Response) => {
  const [_, theme] = url.split('?theme=');
  const initialState: ThemeContextType = { theme: (theme as ThemeOptions) || 'light' };

  const client = new ApolloClient({
    ssrMode: true,
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  const sheet = new ServerStyleSheet();

  const AppWithProviders = (
    <ApolloProvider client={client}>
      <StaticRouter location={url}>
        <ThemeProvider initialState={initialState}>
          <StyleSheetManager sheet={sheet.instance}>
            <App />
          </StyleSheetManager>
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  );

  const content = await renderToStringWithData(AppWithProviders);

  const styleTags = sheet.getStyleTags();
  sheet.seal();

  response.status(200);
  response.setHeader('Content-type', 'text/html');

  const apolloState = client.extract();

  const html = `
        <html lang="en">
            <head>
                <title>Picsart Challenge</title>
                ${styleTags}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                    window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(/</g, '\\u003c')};
                </script>
                <script src="${assets['main.js']}"></script>
            </body>
        </html>
    `;

  response.send(html);
  response.end();
};
