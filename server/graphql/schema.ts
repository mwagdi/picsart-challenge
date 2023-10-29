import { buildSchema } from 'graphql/utilities';

export const schema = buildSchema(`
      type Query {
        users(q: String, _sort: String, _page: Int): UserResponse!
        pages: Int
        getUser(id: String!): User
        tasks: [Task]
      }
      
      type Mutation {
        addTask(task: TaskInput!): [Task]
        deleteTask(id: String!): [Task]
      }
      
      type UserResponse {
        list: [User]!
        pages: Int!
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
