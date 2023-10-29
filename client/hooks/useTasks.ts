import { useMutation, useQuery } from '@apollo/client';
import { TaskInputType } from '@projectTypes/task';
import { ADD_TASK, DELETE_TASK, GET_TASKS } from '@queries/tasks';

export const useTasks = () => {
  const { data } = useQuery(GET_TASKS);

  const [addTaskMutation] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: addTask,
        },
      });
    },
  });

  const [deleteTaskMutation] = useMutation(DELETE_TASK, {
    update(cache, { data: { deleteTask } }) {
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: deleteTask,
        },
      });
    },
  });

  const addTask = async (task: TaskInputType) => {
    await addTaskMutation({ variables: { task } });
  };

  const deleteTask = async (id: string) => {
    await deleteTaskMutation({ variables: { id } });
  };

  return {
    tasks: data?.tasks || [],
    addTask,
    deleteTask,
  };
};
