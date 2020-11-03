import React from 'react';
import Issues from '../components/issues';
import 'semantic-ui-css/semantic.min.css';
import { IssuesProvider } from '../contexts/IssuesContext';
function IssuePage() {
  return (
    <IssuesProvider>
      <Issues />
    </IssuesProvider>
  );
}

export default IssuePage;
