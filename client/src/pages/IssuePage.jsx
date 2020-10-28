import React from 'react';
import {
  IssueHeader,
  IssueList
} from '../components/issues';
import 'semantic-ui-css/semantic.min.css';

function IssuePage() {
  return (
    <>
      <IssueHeader />
      <IssueList />
    </>
  );
}

export default IssuePage;