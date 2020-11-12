import React from 'react';
import Header from './header';
import List from './list';
import S from './style';

function Milestone() {
  console.log('꼭 지워야하는데');
  return (
    <S.MilestoneWrapper>
      <Header />
      <List />
    </S.MilestoneWrapper>
  );
}

export default Milestone;
