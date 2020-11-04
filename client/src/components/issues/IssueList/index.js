import React, {useState, useEffect} from 'react';
import ListHeader from './ListHeader';
import List from './List';
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
