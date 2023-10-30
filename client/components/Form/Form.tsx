import { Button, Input } from '@client/components';
import { TaskInputType } from '@projectTypes/task';
import { removeEmptyStrings } from '@utils/string-helpers';
import { instanceOfObjectType } from '@utils/type-helpers';
import { ChangeEvent, FormEvent, useState } from 'react';

import { ErrorMessage, StyledForm } from './Form.style';

export const Form = ({ onSubmit }: { onSubmit: (input: TaskInputType) => void }) => {
  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
  });

  const [error, setError] = useState<undefined | string>(undefined);

  const handleSubmit = (event: FormEvent) => {
    const formattedInputs = removeEmptyStrings(formInputs);
    if (instanceOfObjectType<TaskInputType>(formattedInputs, ['title'])) {
      onSubmit(formattedInputs);
      setFormInputs({ title: '', description: '' });
    } else {
      setError('Title is required');
    }
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <Input
        placeholder="Title"
        type="text"
        name="title"
        value={formInputs.title}
        onChange={handleChange}
        $hasError={error !== undefined}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        placeholder="Description"
        type="text"
        name="description"
        value={formInputs.description}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};
