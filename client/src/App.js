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

  const checkToken = () => {
    if (!localStorage.getItem('auth_token')) {
      history.push('/login');
    }
  };

  return (
    <LabelProvider>
      <MilestonesProvider>
        <UsersProvider>
          {console.log(localStorage.getItem('auth_token'))}
          <Switch>
            <Route exact path="/" component={IssuePage} />
            <Route path="/issue/new" component={NewIssuePage} />
            <Route path="/label" component={LabelPage} />
            <Route path="/milestone/edit/:id" component={EditMilestonePage} />
            <Route path="/milestone/new" component={NewMilestonePage} />
            <Route path="/milestone" component={MilestonePage} />
            <Route path="/detail/:id" component={IssueDetailPage} />
            <Route path="/login" component={UserPage} />
            <Route render={() => <ErrorPage />} />
          </Switch>
        </UsersProvider>
      </MilestonesProvider>
    </LabelProvider>
  );
};
export default App;
