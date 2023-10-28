import { Button } from '@client/components';
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
      <Button variant="danger" onClick={handleDeleteClick}>
        Delete task
      </Button>
    </div>
  );
};
