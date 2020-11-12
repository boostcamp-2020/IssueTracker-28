import React from 'react';
import Header from './header';
import List from './list';
import S from './style';

function Milestone() {
  return (
    <S.MilestoneWrapper>
      <Header />
      <List />
    </S.MilestoneWrapper>
  );
}

export default Milestone;
