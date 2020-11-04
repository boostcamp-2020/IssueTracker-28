import React from 'react';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';
import S from './style';

function Issues() {
  return (
    <S.IssuesWrapper>
      <IssueHeader />
      <IssueList />
    </S.IssuesWrapper>
  );
}

export default Issues;
