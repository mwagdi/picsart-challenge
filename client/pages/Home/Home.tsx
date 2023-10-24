import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../../../contexts';

const Home = () => {
  const [side, setSide] = useState('server');
  const context = useTheme();

  useEffect(() => {
    setSide('client');
  }, []);

  return (
    <div>
      <div>Home component</div>
      <div>{side}</div>
      <button onClick={() => console.log('HJI')}>Click me</button>
      <Link to="users">User list</Link>
    </div>
  );
};

export default Home;
