import { Form, TasksList } from '@client/components';
import { useTasks } from '@client/hooks/useTasks';
import { TaskInputType } from '@projectTypes/task';

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
    </>
  );
};

export default Home;
