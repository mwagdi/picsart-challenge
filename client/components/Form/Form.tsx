import { TaskInputType } from '@projectTypes/task';
import { ChangeEvent, FormEvent, useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formInputs.title} onChange={handleChange} />
      <input type="text" name="description" value={formInputs.description} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
