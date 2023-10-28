import { TaskType } from '@projectTypes/task';

interface TaskItemProps {
  task: TaskType;
  onDeleteClick: (id: string) => void;
}

export const TaskItem = ({ task, onDeleteClick }: TaskItemProps) => {
  const handleDeleteClick = () => {
    onDeleteClick(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <button onClick={handleDeleteClick}>Delete task</button>
    </div>
  );
};
