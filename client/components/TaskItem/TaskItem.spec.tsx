import { fireEvent, render } from '@testing-library/react';

import { TaskItem } from './TaskItem';

const onDeleteClick = jest.fn();

describe('TaskItem', () => {
  describe('if task has `description`', () => {
    it('should render task with description', () => {
      const task = {
        id: '1',
        title: 'Task 1',
        description: 'lorem ipsum',
      };

      const { container, getByText } = render(<TaskItem onDeleteClick={onDeleteClick} task={task} />);
      expect(getByText('Task 1')).toBeInTheDocument();
      expect(container.querySelector('p')).toBeTruthy();
      expect(getByText('lorem ipsum')).toBeInTheDocument();
    });
  });

  describe('if task does not have `description`', () => {
    it('should render task without description', () => {
      const task = {
        id: '1',
        title: 'Task 1',
      };

      const { container, getByText } = render(<TaskItem onDeleteClick={onDeleteClick} task={task} />);
      expect(getByText('Task 1')).toBeInTheDocument();
      expect(container.querySelector('p')).toBeFalsy();
    });
  });

  describe('when delete task button is clicked', () => {
    it('should trigger `onDeleteClick`', () => {
      const task = {
        id: '1',
        title: 'Task 1',
      };

      const { getByRole } = render(<TaskItem onDeleteClick={onDeleteClick} task={task} />);
      fireEvent.click(getByRole('button'));
      expect(onDeleteClick).toHaveBeenCalledWith('1');
    });
  });
});
