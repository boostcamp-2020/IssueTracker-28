import React from 'react';
import { IssuesProvider } from '@contexts/IssuesContext';
import Issues from '../components/issues';
import 'semantic-ui-css/semantic.min.css';

function IssuePage() {
  return (
    <>
      <IssuesProvider>
        <Issues />
      </IssuesProvider>
    </>
  );
}

export default IssuePage;
