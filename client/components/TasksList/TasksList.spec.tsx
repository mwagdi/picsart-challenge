import { TaskType } from '@projectTypes/task';
import { render } from '@testing-library/react';

import { TasksList } from './TasksList';

describe('TasksList', () => {
  it('should render tasks list', () => {
    const tasks: TaskType[] = [
      {
        id: '1',
        title: 'Task 1',
      },
      {
        id: '2',
        title: 'Task 2',
      },
    ];
    const {} = render(<TasksList tasks={tasks} />);
  });
});
