import App from '@client/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

export const htmlTemplate = (assets: Record<string, string>, url: string) => {
  const content = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  return `
        <html lang="en">
            <head>
                <title>Picsart Challenge</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="${assets['main.js']}"></script>
            </body>
        </html>
    `;
};
