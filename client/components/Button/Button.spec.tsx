import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/testing';

import { Button } from './Button';

describe('Button component', () => {
  describe('default load', () => {
    it('should render a regular button with children', () => {
      renderWithProviders(<Button>Click me</Button>);

      const button = screen.getByText('Click me');

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('variant', 'regular');
    });
  });

  describe('when `variant` = `danger`', () => {
    it('should render a danger button with children', () => {
      renderWithProviders(<Button variant="danger">Delete</Button>);

      const button = screen.getByText('Delete');

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('variant', 'danger');
    });
  });

  describe('when button is clicked', () => {
    it('should call the provided onClick function when clicked', () => {
      const onClickMock = jest.fn();
      renderWithProviders(<Button onClick={onClickMock}>Click me</Button>);

      const button = screen.getByText('Click me');

      fireEvent.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('when has additional HTML attributes', () => {
    it('should pass attributes to the button element', () => {
      renderWithProviders(<Button data-test-id="test-button">Click me</Button>);

      const button = screen.getByText('Click me');

      expect(button).toHaveAttribute('data-test-id', 'test-button');
    });
  });
});
