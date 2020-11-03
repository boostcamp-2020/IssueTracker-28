import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from '@pages/IssuePage';
import NewIssuePage from '@pages/NewIssuePage';
import UserPage from '@pages/UserPage';
import MilestonePage from '@pages/MilestonePage';
import { UserProvider } from '@contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (localStorage.getItem('auth_token')) return <IssuePage />;
            return <UserPage />;
          }}
        />
        <Route path="/new" component={NewIssuePage} />
        <Route path="/milestone" component={MilestonePage} />
        {/* <Route exact path="/" component={IssuePage} /> */}
        {/* <Route path="/login" component={UserPage} /> */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </UserProvider>
  );
};
export default App;
