import React from 'react';
import ListHeader from './listHeader';
import List from './list';
import S from './style';

function IssueList() {
  return (
    <S.ListWrapper>
      <ListHeader />
      <List />
    </S.ListWrapper>
  );
}
export default IssueList;
