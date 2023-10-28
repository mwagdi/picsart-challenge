import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails';
import UserList from './pages/UserList/UserList';

const App = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  </Suspense>
);

export default App;
