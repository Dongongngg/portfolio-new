import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//page
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
