import React from 'react';
import { IssuesProvider } from '@contexts/IssuesContext';
import Issues from '../components/issues';
import Header from '../components/header/header';
import 'semantic-ui-css/semantic.min.css';

function IssuePage() {
  return (
    <>
      <Header />
      <IssuesProvider>
        <Issues />
      </IssuesProvider>
    </>
  );
}

export default IssuePage;
