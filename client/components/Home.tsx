import { useEffect, useState } from 'react';

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
    </div>
  );
};

export default Home;
