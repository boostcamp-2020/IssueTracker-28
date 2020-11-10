import React from 'react';
import Date from '@utils/date';
import { CalendarIcon } from '@primer/octicons-react';
import S from './style';

function Milestone({ milestone }) {
  const openIssueCnt = milestone.issues.filter(issue => issue.status === 0).length;
  const closeIssueCnt = milestone.issues.filter(issue => issue.status === 1).length;

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
        <S.ProgressBar value={closeIssueCnt} max={openIssueCnt + closeIssueCnt === 0 ? 100 : openIssueCnt + closeIssueCnt}></S.ProgressBar>
        <S.ProgressState>
          <S.State>{Math.round(closeIssueCnt / (openIssueCnt + closeIssueCnt === 0 ? 100 : openIssueCnt + closeIssueCnt) * 100)}% complete</S.State>
          <S.State>{openIssueCnt} open</S.State>
          <S.State>{closeIssueCnt} closed</S.State>
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