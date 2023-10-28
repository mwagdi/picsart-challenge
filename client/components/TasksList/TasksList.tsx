import { TaskItem } from '@client/components';
import { TaskType } from '@projectTypes/task';

import { List } from './TasksList.style';

export const TasksList = ({ tasks }: { tasks: TaskType[] }) =>
  tasks.length ? (
    <List>
      {tasks.map((task: TaskType) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  ) : null;
