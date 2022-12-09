import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { routes } from './constants/routes';
import SignIn from './pages/Auth/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
        <Route path={routes.SIGNIN} element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
