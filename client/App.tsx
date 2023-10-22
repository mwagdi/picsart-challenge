import { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const handleClick = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main>
      <p>App</p>
      <p>{isClient ? 'Is Client' : 'Is Server'}</p>
      <a>Hello</a>
      <button onClick={handleClick}>Increment</button>
      <p>{counter}</p>
    </main>
  );
};

export default App;
