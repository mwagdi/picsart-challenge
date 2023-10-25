import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import fs from 'fs';
import { GraphQLError } from 'graphql/error';
import { buildSchema } from 'graphql/utilities';

import { TaskInputType } from '../types';
import { htmlTemplate } from './htmlTemplate';

const app = express();

app.use(express.static('public'));

const manifest = fs.readFileSync('public/manifest.json', 'utf-8');
const assets = JSON.parse(manifest);

const schema = buildSchema(`
      type Query {
        users: [User]
        getUser(id: String!): User
        tasks: [Task]
      }
      
      type Mutation {
        addTask(task: TaskInput!): [Task]
        deleteTask(id: String!): [Task]
      }
      
      type User {
        id: String!
        name: String!
        email: String!
        age: Int!
        address: String!
        profileImageUrl: String!
      }
      
      type Task {
        id: String!
        title: String!
        description: String
      }
      
      input TaskInput {
        title: String!
        description: String
      }
    `);

const root = {
  users: async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  getUser: async ({ id }: { id: string }) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  tasks: async () => {
    try {
      const response = await fetch('http://localhost:3001/tasks');
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  addTask: async ({ task }: { task: TaskInputType }) => {
    try {
      await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const response = await fetch('http://localhost:3001/tasks');
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  deleteTask: async ({ id }: { id: string }) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });

      const response = await fetch('http://localhost:3001/tasks');
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.get('*', (req, res) => {
  res.send(htmlTemplate(assets, req.url));
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
