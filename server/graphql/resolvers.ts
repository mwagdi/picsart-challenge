import { GraphQLError } from 'graphql/error';

import { TaskInputType } from '../../types';

export const resolvers = {
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
