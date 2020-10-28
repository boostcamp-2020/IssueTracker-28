import React from 'react';
import ListHeader from './ListHeader';
import List from './List';

import { ListWrapper } from './style';

function ListContainer({ children }) {
  return (
    <ListWrapper>
      <ListHeader />
      <List />
    </ListWrapper>
  );
}


export default ListContainer;
