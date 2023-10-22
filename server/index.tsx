import express from 'express';
import fs from 'fs';

import { htmlTemplate } from './htmlTemplate';

const app = express();

app.use(express.static('public'));

const manifest = fs.readFileSync('public/manifest.json', 'utf-8');
const assets = JSON.parse(manifest);

app.get('/', (req, res) => {
  res.send(htmlTemplate(assets));
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
