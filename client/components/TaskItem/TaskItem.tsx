import { Button } from '@client/components';
import { TaskType } from '@projectTypes/task';

import { Content, ListItem } from './TaskItem.style';

interface TaskItemProps {
  task: TaskType;
  onDeleteClick: (id: string) => void;
}

export const TaskItem = ({ task, onDeleteClick }: TaskItemProps) => {
  const handleDeleteClick = () => {
    onDeleteClick(task.id);
  };

  return (
    <ListItem>
      <Content>
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </Content>
      <Button variant="danger" onClick={handleDeleteClick}>
        Delete task
      </Button>
    </ListItem>
  );
};
