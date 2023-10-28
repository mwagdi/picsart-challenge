import { useMutation, useQuery } from '@apollo/client';
import { TasksList } from '@client/components';
import { Form } from '@client/components/Form/Form';
import { TaskInputType } from '@projectTypes/task';
import { ADD_TASK, DELETE_TASK, GET_TASKS } from '@queries/tasks';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    data: { tasks },
  } = useQuery(GET_TASKS);

  const [addTask] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: addTask,
        },
      });
    },
  });

  const [deleteTask] = useMutation(DELETE_TASK, {
    update(cache, { data: { deleteTask } }) {
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: deleteTask,
        },
      });
    },
  });

  const onSubmitForm = async (task: TaskInputType) => {
    await addTask({ variables: { task } });
  };

  const onDeleteClick = async (id: string) => {
    await deleteTask({ variables: { id } });
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
