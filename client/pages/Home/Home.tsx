import { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery, useSuspenseQuery } from '@apollo/client';
import { TaskType } from '../../../types';
import { TasksList } from '../../components/TasksList/TasksList';

const Home = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <TasksList />
      <Link to="users">User list</Link>
    </Suspense>
  );
};

export default Home;
