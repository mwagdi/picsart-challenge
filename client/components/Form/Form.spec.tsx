import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/testing';

import { Form } from './Form';

describe('Form component', () => {
  describe('on load', () => {
    it('should render the form with input fields and a submit button', () => {
      const { container } = renderWithProviders(<Form onSubmit={() => {}} />);

      const titleInput = container.querySelector('input[name="title"]');
      const descriptionInput = container.querySelector('input[name="description"]');
      const submitButton = screen.getByRole('button');

      expect(titleInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('when typing', () => {
    it('should update the form input values when typing', () => {
      const { container } = renderWithProviders(<Form onSubmit={() => {}} />);

      const titleInput = container.querySelector('input[name="title"]') as Element;
      const descriptionInput = container.querySelector('input[name="description"]') as Element;

      fireEvent.change(titleInput, { target: { value: 'New Title' } });
      fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

      expect(titleInput).toHaveValue('New Title');
      expect(descriptionInput).toHaveValue('New Description');
    });
  });

  describe('when form is submitted with title', () => {
    it('should call the onSubmit function when the form is submitted', () => {
      const onSubmitMock = jest.fn();
      const { container } = renderWithProviders(<Form onSubmit={onSubmitMock} />);

      const titleInput = container.querySelector('input[name="title"]') as Element;
      const descriptionInput = container.querySelector('input[name="description"]') as Element;
      const submitButton = screen.getByRole('button');

      fireEvent.change(titleInput, { target: { value: 'New Title' } });
      fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
      fireEvent.click(submitButton);

      expect(onSubmitMock).toHaveBeenCalledWith({
        title: 'New Title',
        description: 'New Description',
      });
    });
  });

  describe('when form is submitted without title', () => {
    it('should return an error', () => {
      const onSubmitMock = jest.fn();
      const { container } = renderWithProviders(<Form onSubmit={onSubmitMock} />);

      const titleInput = container.querySelector('input[name="title"]') as Element;
      const submitButton = screen.getByRole('button');

      fireEvent.change(titleInput, { target: { value: '' } });
      fireEvent.click(submitButton);

      expect(screen.getByText('Title is required')).toBeInTheDocument();
    });
  });
});
