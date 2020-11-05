import React from 'react';
import { IssuesProvider } from '@contexts/IssuesContext';
import { CheckedItemProvider } from '@contexts/CheckedItemContext';
import Issues from '../components/issues';
import 'semantic-ui-css/semantic.min.css';

function IssuePage() {
  return (
    <>
      <IssuesProvider>
        <CheckedItemProvider>
          <Issues />
        </CheckedItemProvider>
      </IssuesProvider>
    </>
  );
}

export default IssuePage;
