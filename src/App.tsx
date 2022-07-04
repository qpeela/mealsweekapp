import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { AuthWrapper } from './app/AuthWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route
            index
            element={
              <AuthWrapper>
                <HomePage />
              </AuthWrapper>
            }
          />
          <Route path={'auth'} element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
