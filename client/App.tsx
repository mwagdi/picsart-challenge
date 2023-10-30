import { Main, Navbar } from '@client/components';
import GlobalStyle from '@client/globalStyle';
import Users from '@client/pages/Users/Users';
import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails';

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Suspense>
        <Navbar />
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
            <Main>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
              </Routes>
            </Main>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  );
};

export default App;
