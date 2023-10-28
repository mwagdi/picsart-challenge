import { useMutation, useQuery } from '@apollo/client';
import { TasksList } from '@client/components';
import { DELETE_TASK, GET_TASKS } from '@queries/tasks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    data: { tasks: fetchedTasks },
  } = useQuery(GET_TASKS);

  const [deleteTask, { data }] = useMutation(DELETE_TASK);

  const [tasks, setTasks] = useState(fetchedTasks);

  useEffect(() => {
    if (data) setTasks(data.deleteTask);
  }, [data]);

  const onDeleteClick = async (id: string) => {
    await deleteTask({ variables: { id } });
  };

  return (
    <>
      <TasksList onDeleteClick={onDeleteClick} tasks={tasks} />
      <Link to="users">User list</Link>
    </>
  );
};

export default Home;
