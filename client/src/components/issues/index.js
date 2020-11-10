import React from 'react';
import IssueHeader from './header';
import IssueList from './issueList';
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
