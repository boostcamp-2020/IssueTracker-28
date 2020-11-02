import React from 'react';
import ListHeader from './ListHeader';
import List from './List';

import { ListWrapper } from './style';

function IssueList() {
  return (
    <ListWrapper>
      <ListHeader />
      <List />
    </ListWrapper>
  );
}

export default IssueList;
