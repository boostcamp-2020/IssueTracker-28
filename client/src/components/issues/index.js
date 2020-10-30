import React from 'react';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';
import { IssuesWrapper } from './style';
import { IssuesProvider } from '../../contexts/IssuesContext';

function Issues() {
  return (
    <IssuesWrapper>
      <IssueHeader />
      <IssuesProvider>
        <IssueList />
      </IssuesProvider>
    </IssuesWrapper>
  )
}

export default Issues;

