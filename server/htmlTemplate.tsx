import App from '@client/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { ThemeProvider } from '../contexts';
import { ThemeContextType, ThemeOptions } from '../types';

export const htmlTemplate = (assets: Record<string, string>, url: string) => {
  const [_, theme] = url.split('?theme=');
  const initialState: ThemeContextType = { theme: (theme as ThemeOptions) || 'light' };
  const content = renderToString(
    <StaticRouter location={url}>
      <ThemeProvider initialState={initialState}>
        <App />
      </ThemeProvider>
    </StaticRouter>,
  );

  return `
        <html lang="en">
            <head>
                <title>Picsart Challenge</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                </script>
                <script src="${assets['main.js']}"></script>
            </body>
        </html>
    `;
};
