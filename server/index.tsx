import express from 'express';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';

import App from '../client/App';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', express.static(path.join(__dirname, 'static')));

const manifest = fs.readFileSync(path.join(__dirname, 'static/manifest.json'), 'utf-8');
const assets = JSON.parse(manifest);

app.get('/', (req, res) => {
  const component = renderToString(<App />);

  // res.send(content);
  res.render('client', { assets, component });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
