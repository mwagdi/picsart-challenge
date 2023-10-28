import { TaskInputType } from '@projectTypes/task';
import { ChangeEvent, FormEvent, useState } from 'react';

import { StyledForm, StyledInput } from './Form.style';

export const Form = ({ onSubmit }: { onSubmit: (input: TaskInputType) => void }) => {
  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
  });
  const handleSubmit = (event: FormEvent) => {
    onSubmit(formInputs);
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <StyledInput placeholder="Title" type="text" name="title" value={formInputs.title} onChange={handleChange} />
      <StyledInput
        placeholder="Description"
        type="text"
        name="description"
        value={formInputs.description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
};
