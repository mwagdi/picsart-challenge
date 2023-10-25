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

const tasksList = [
  {
    id: 1,
    title: 'First task',
    description: 'lorem ipsum',
  },
];

const schema = buildSchema(`
      type Query {
        users(id: Int): [User]
        tasks: [Task]
      }
      
      type Mutation {
        addTask(task: TaskInput): Task
        deleteTask(id: Int!): [Task]
      }
      
      type User {
        id: Int!
        name: String!
        email: String!
        age: Int!
        address: String!
        profileImageUrl: String!
      }
      
      type Task {
        id: Int!
        title: String!
        description: String
      }
      
      input TaskInput {
        title: String!
        description: String
      }
    `);

const root = {
  users({ id }: { id?: number }) {
    const userList = [
      {
        id: 1,
        name: 'Mahmoud',
        email: 'mahmoudwagdi86@gmail.com',
        age: 37,
        address: '',
        profileImageUrl: '',
      },
      {
        id: 2,
        name: 'Mahmoud1',
        email: 'mahmoudwagdi861@gmail.com',
        age: 37,
        address: '',
        profileImageUrl: '',
      },
      {
        id: 3,
        name: 'Mahmoud2',
        email: 'mahmoudwagdi862@gmail.com',
        age: 37,
        address: '',
        profileImageUrl: '',
      },
    ];
    if (!id) return userList;

    const result = userList.filter((user) => user.id === id);
    return result.length > 0 ? result : new GraphQLError('User not found');
  },
  tasks() {
    return tasksList;
  },
  addTask({ task }: { task: TaskInputType }) {
    // return [...tasksList, {
    //   id: tasksList.length,
    //   ...task
    // }];
    return {
      id: Math.floor(Math.random() * Date.now()),
      ...task,
    };
  },
  deleteTask({ id }: { id: number }) {
    if (!tasksList.some((task) => task.id === id)) return new GraphQLError('Task not found');

    return tasksList.filter((task) => task.id !== id);
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
