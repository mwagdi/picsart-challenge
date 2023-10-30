import { Form, LoadingSpinner, TasksList } from '@client/components';
import { useTasks } from '@client/hooks/useTasks';
import { TaskInputType } from '@projectTypes/task';

const Home = () => {
  const { tasks, addTask, deleteTask, loading } = useTasks();

  const onSubmitForm = async (task: TaskInputType) => {
    await addTask(task);
  };

  const onDeleteClick = async (id: string) => {
    await deleteTask(id);
  };

  return (
    <>
      <Form onSubmit={onSubmitForm} />
      {loading && <LoadingSpinner />}
      {tasks.length > 0 && <TasksList onDeleteClick={onDeleteClick} tasks={tasks} />}
    </>
  );
};

export default Home;
