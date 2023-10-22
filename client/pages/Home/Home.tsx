import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [side, setSide] = useState('server');

  useEffect(() => {
    setSide('client');
  }, []);

  return (
    <div>
      <div>Home component ---</div>
      <div>{side}</div>
      <button onClick={() => console.log('HJI')}>Click me</button>
      <Link to="users">User list</Link>
    </div>
  );
};

export default Home;
