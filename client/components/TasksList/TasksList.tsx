import { TaskItem } from '@client/components';
import { TaskType } from '@projectTypes/task';

import { List } from './TasksList.style';

interface TasksListProps {
  tasks: TaskType[];
  onDeleteClick: (id: string) => void;
}

export const TasksList = ({ tasks, onDeleteClick }: TasksListProps) => (
  <List>
    {tasks.map((task: TaskType) => (
      <TaskItem onDeleteClick={onDeleteClick} key={task.id} task={task} />
    ))}
  </List>
);
