import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/testing';

import { Switcher } from './Switcher';

describe('Switcher component', () => {
  describe('default load', () => {
    it('should renders with the initial theme state', () => {
      const { getByRole, getByText, queryByText } = renderWithProviders(<Switcher />);

      const switcher = getByRole('switch');
      const switcherState = getByText('Light');

      expect(switcher).toBeInTheDocument();
      expect(switcher).toHaveAttribute('on', 'false');
      expect(switcherState).toBeInTheDocument();
      expect(queryByText('Dark')).not.toBeInTheDocument();
    });
  });
  describe('when clicked', () => {
    it('should toggle the theme', () => {
      const { getByRole, getByText, queryByText } = renderWithProviders(<Switcher />);

      const switcher = getByRole('switch');
      const switcherState = getByText('Light');

      expect(switcher).toBeInTheDocument();
      expect(switcher).toHaveAttribute('on', 'false');
      expect(switcherState).toBeInTheDocument();
      expect(queryByText('Dark')).not.toBeInTheDocument();

      fireEvent.click(switcher);
      expect(getByText('Dark')).toBeInTheDocument();
    });
  });
});
