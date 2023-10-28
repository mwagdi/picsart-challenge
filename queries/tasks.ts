import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(id: $id) {
      id
      title
      description
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($task: TaskInput!) {
    addTask(task: $task) {
      id
      title
      description
    }
  }
`;
