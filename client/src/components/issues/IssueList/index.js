import React from 'react';
import ListHeader from './ListHeader';
import List from './List';

function ListContainer({ children }) {
  return (
    <div>
      <ListHeader />
      <List />
    </div>
  );
}


export default ListContainer;
