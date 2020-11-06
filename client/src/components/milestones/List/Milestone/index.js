import React from 'react';
import { CalendarIcon } from '@primer/octicons-react';
import S from './style';

function Milestone() {
  return (
    <S.MilestoneWrapper>
      <S.Left>
        <S.Title>스프린트1</S.Title>
        <S.DateWrapper>
          <CalendarIcon />
          <S.Date>Due by November 06, 2020</S.Date>
        </S.DateWrapper>
        <S.Description>이번 배포를 위한 스프린트</S.Description>
      </S.Left>
      <S.Right>
        <S.ProgressBar value={33} max={100}></S.ProgressBar>
        <S.ProgressState>
          <S.State>33% complete</S.State>
          <S.State>2 open</S.State>
          <S.State>0 closed</S.State>
        </S.ProgressState>
        <S.ButtonWrapper>
          <S.Button>Edit</S.Button>
          <S.Button>Close</S.Button>
          <S.Button className='delete-btn'>Delete</S.Button>
        </S.ButtonWrapper>
      </S.Right>
    </S.MilestoneWrapper>
  );
}

export default Milestone;