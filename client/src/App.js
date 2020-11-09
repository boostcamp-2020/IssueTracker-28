import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UsersProvider } from '@contexts/UsersContext';
import IssuePage from '@pages/IssuePage';
import NewIssuePage from '@pages/NewIssuePage';
import UserPage from '@pages/UserPage';
import LabelPage from '@pages/LabelPage';
import MilestonePage from '@pages/MilestonePage';
import IssueDetailPage from '@pages/IssueDetailPage';
import { LabelProvider } from '@contexts/LabelContext';
import { MilestonesProvider } from '@contexts/MilestonesContext';

const App = () => {
  return (
    <LabelProvider>
      <MilestonesProvider>
        <UsersProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <IssuePage />;
                if (localStorage.getItem('auth_token')) return <IssuePage />;
                return <UserPage />;
              }}
            />
            <Route path="/newIssue" component={NewIssuePage} />
            <Route path="/label" component={LabelPage} />
            <Route path="/milestone" component={MilestonePage} />
            <Route path="/detail/:id" component={IssueDetailPage} />
            <Route
              render={({ location }) => (
                <div>
                  <h2>이 페이지는 존재하지 않습니다</h2>
                  <p>{location.pathname}</p>
                </div>
              )}
            />
          </Switch>
        </UsersProvider>
      </MilestonesProvider>
    </LabelProvider>
  );
};
export default App;
