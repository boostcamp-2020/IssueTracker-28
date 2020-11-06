import React from 'react';
import Milestone from './Milestone';
import { MilestoneIcon, CheckIcon } from '@primer/octicons-react';
import S from './style';

function List() {
  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.CountWrapper>
          <MilestoneIcon />
          <S.Count>2 Open</S.Count>
        </S.CountWrapper>
        <S.CountWrapper>
          <CheckIcon />
          <S.Count>0 Closed</S.Count>
        </S.CountWrapper>
      </S.ListHeader>
      <S.List>
        <Milestone />
      </S.List>
    </S.ListWrapper>
  );
}

export default List;