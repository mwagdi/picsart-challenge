import { Main, Navbar } from '@client/components';
import GlobalStyle from '@client/globalStyle';
import Users from '@client/pages/Users/Users';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails';

const App = () => (
  <>
    <GlobalStyle />
    <Suspense>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Main>
    </Suspense>
  </>
);

export default App;
