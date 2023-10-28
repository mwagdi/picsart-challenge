import { useQuery } from '@apollo/client';
import { TasksList } from '@client/components';
import { GET_TASKS } from '@queries/tasks';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    data: { tasks },
  } = useQuery(GET_TASKS);
  return (
    <>
      <TasksList tasks={tasks} />
      <Link to="users">User list</Link>
    </>
  );
};

export default Home;
