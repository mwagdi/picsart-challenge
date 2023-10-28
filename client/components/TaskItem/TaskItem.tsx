import { useMutation } from '@apollo/client';
import { TaskType } from '@projectTypes/task';
import { DELETE_TASK } from '@queries/tasks';

export const TaskItem = ({ task }: { task: TaskType }) => {
  // const [deleteTask] = useMutation(DELETE_TASK);
  // const handleDeleteClick = () => {
  //   deleteTask({ variables: { id: task.id } });
  // };
  return (
    <div>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
    </div>
  );
};
