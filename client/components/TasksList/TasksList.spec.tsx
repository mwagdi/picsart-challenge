import { TaskType } from '@projectTypes/task';
import { renderWithProviders } from '@utils/testing';

import { TasksList } from './TasksList';

const onDeleteClick = jest.fn();

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
    const { container } = renderWithProviders(<TasksList onDeleteClick={onDeleteClick} tasks={tasks} />);
    expect(container).not.toBeNull();
    expect(container.firstChild?.childNodes).toHaveLength(2);
  });
});
