import { TaskType } from '@projectTypes/task';

import { List } from './TasksList.style';

export const TasksList = ({ tasks }: { tasks: TaskType[] }) => (
  <List data-testid="task-list">
    {tasks.map((task: TaskType) => (
      <li key={task.id}>{task.title}</li>
    ))}
  </List>
);
