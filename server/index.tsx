import Home from '@client/components/Home';
import express from 'express';
import fs from 'fs';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.static('public'));

const manifest = fs.readFileSync('public/manifest.json', 'utf-8');
const assets = JSON.parse(manifest);

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="${assets['main.js']}"></script>
            </body>
        </html>
    `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
