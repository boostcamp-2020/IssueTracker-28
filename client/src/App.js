import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { UsersProvider } from '@contexts/UsersContext';
import IssuePage from '@pages/IssuePage';
import NewIssuePage from '@pages/NewIssuePage';
import UserPage from '@pages/UserPage';
import LabelPage from '@pages/LabelPage';
import MilestonePage from '@pages/MilestonePage';
import NewMilestonePage from '@pages/NewMilestonePage';
import EditMilestonePage from '@pages/EditMilestonePage';
import IssueDetailPage from '@pages/IssueDetailPage';
import ErrorPage from '@pages/ErrorPage';
import { LabelProvider } from '@contexts/LabelContext';
import { MilestonesProvider } from '@contexts/MilestonesContext';

const App = () => {
  const history = useHistory();
  let checkUser;
  if (localStorage.getItem('auth_token')) {
    checkUser = true;
  } else {
    checkUser = false;
    history.push('/');
  }
  return (
    <LabelProvider>
      <MilestonesProvider>
        <UsersProvider>
          <Switch>
            {checkUser ? (
              <Route exact path="/" component={IssuePage} />
            ) : (
              <Route path="/" component={UserPage} />
            )}
            <Route path="/issue/new" component={NewIssuePage} />
            <Route path="/label" component={LabelPage} />
            <Route path="/milestone/edit/:id" component={EditMilestonePage} />
            <Route path="/milestone/new" component={NewMilestonePage} />
            <Route path="/milestone" component={MilestonePage} />
            <Route path="/detail/:id" component={IssueDetailPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </UsersProvider>
      </MilestonesProvider>
    </LabelProvider>
  );
};
export default App;
