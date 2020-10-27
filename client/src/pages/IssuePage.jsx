import React from 'react';
import {
  IssueHeader,
  IssueList,
} from '../components/issues';

function IssuePage() {
  return (
    <>
      <IssueHeader />
      <IssueList />
    </>
  );
}

export default IssuePage;