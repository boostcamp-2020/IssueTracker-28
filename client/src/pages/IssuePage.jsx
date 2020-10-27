import React from 'react';
import {
  IssueHeader,
  ListContainer,
  ListHeader,
  List
} from '../components/issues';

function IssuePage() {
  return (
    <>
      <IssueHeader />
      <ListContainer>
        <ListHeader />
        <List />
      </ListContainer>
    </>
  );
}

export default IssuePage;