import React from 'react';
import Milestone from './Milestone';
import S from './style';

function List() {
  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.CountWrapper>
          <S.Count>{} Open</S.Count>
        </S.CountWrapper>
      </S.ListHeader>
      <S.List>
        <Milestone />
      </S.List>
    </S.ListWrapper>
  );
}

export default List;