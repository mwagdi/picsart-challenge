import { useQuery } from '@apollo/client';
import { TaskType } from '@projectTypes/task';
import { GET_TASKS } from '@queries/tasks';

export const TasksList = ({ tasks }: { tasks: TaskType[] }) => {
  // const { data } = useQuery(GET_TASKS);
  return (
    <ul>
      {tasks.map((task: TaskType) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};
