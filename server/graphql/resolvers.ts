import { TaskInputType } from '@projectTypes/task';
import { GraphQLError } from 'graphql/error';

const API_URL = 'http://localhost:3001';

export const resolvers = {
  users: async ({ q }: { q?: string }) => {
    try {
      const response = await fetch(`${API_URL}/users${q ? `?q=${q}` : ''}`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  getUser: async ({ id }: { id: string }) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  tasks: async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  addTask: async ({ task }: { task: TaskInputType }) => {
    try {
      await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const response = await fetch(`${API_URL}/tasks`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
  deleteTask: async ({ id }: { id: string }) => {
    try {
      await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });

      const response = await fetch(`${API_URL}/tasks`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) return new GraphQLError(error.message);
    }
  },
};
