import React from 'react';
import Date from '@utils/date';
import { CalendarIcon } from '@primer/octicons-react';
import S from './style';

function Milestone({ milestone }) {
  return (
    <S.MilestoneWrapper>
      <S.Left>
        <S.Title>{milestone.title}</S.Title>
        <S.DateWrapper>
          <CalendarIcon />
          <S.Date>Due by {Date.getDate(milestone.due_date, { day: 'numeric', year: 'numeric', month: 'long' })}</S.Date>
        </S.DateWrapper>
        <S.Description>{milestone.desc}</S.Description>
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