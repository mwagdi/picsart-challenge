import Home from '@client/components/Home';
import { renderToString } from 'react-dom/server';

export const htmlTemplate = (assets: Record<string, string>) => {
  const content = renderToString(<Home />);

  return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="${assets['main.js']}"></script>
            </body>
        </html>
    `;
};
