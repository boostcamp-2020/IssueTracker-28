import React from 'react';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';
import { IssuesWrapper } from './style';

function Issues() {
  return (
    <IssuesWrapper>
      <IssueHeader />
      <IssueList />
    </IssuesWrapper>
  )
}

export default Issues;