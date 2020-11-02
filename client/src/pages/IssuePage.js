import React from 'react';
import Issues from '../components/issues';
import 'semantic-ui-css/semantic.min.css';
import { IssuesProvider } from '../contexts/IssuesContext';
import { getIssues } from '../api/milestone';
async function IssuePage() {
  await console.log(getIssues());
  return (
    <IssuesProvider>
      <Issues />
    </IssuesProvider>
  );
}

export default IssuePage;
