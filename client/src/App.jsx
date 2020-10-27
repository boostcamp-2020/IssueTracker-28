import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';

const App = () => {
  return (
    <Switch>
      <Route path='/' component={IssuePage} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default App;
