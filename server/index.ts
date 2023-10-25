import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import fs from 'fs';

import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';
import { htmlTemplate } from './htmlTemplate';

const app = express();

app.use(express.static('public'));

const manifest = fs.readFileSync('public/manifest.json', 'utf-8');
const assets = JSON.parse(manifest);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.get('*', (req, res) => {
  res.send(htmlTemplate(assets, req.url));
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
