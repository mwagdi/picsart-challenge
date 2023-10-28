import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import fs from 'fs';

import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';
import { renderer } from './renderer';

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

app.get('*', async (req, res) => {
  await renderer(assets, req.url, res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
