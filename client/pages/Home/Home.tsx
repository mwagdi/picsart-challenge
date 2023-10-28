import { Form, TasksList } from '@client/components';
import { useTasks } from '@client/hooks/useTasks';
import { TaskInputType } from '@projectTypes/task';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks, addTask, deleteTask } = useTasks();

  const onSubmitForm = async (task: TaskInputType) => {
    await addTask(task);
  };

  const onDeleteClick = async (id: string) => {
    await deleteTask(id);
  };

  return (
    <>
      <Form onSubmit={onSubmitForm} />
      <TasksList onDeleteClick={onDeleteClick} tasks={tasks} />
      <Link to="users">Users list</Link>
    </>
  );
};

export default Home;
