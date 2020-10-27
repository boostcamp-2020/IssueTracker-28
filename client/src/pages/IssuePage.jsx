import React from 'react';
import IssueHeader from '../components/issues/IssueHeader';
import ListContainer from '../components/issues/ListContainer';
import ListHeader from '../components/issues/ListHeader';
import List from '../components/issues/List';

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