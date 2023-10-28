import { Navbar } from '@client/components';
import GlobalStyle from '@client/globalStyle';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails';
import UserList from './pages/UserList/UserList';

const App = () => (
  <>
    <GlobalStyle />
    <Suspense>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
