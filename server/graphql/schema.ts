import { buildSchema } from 'graphql/utilities';

export const schema = buildSchema(`
      type Query {
        users(q: String): [User]
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
