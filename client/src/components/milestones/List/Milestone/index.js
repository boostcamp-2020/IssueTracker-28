import React from 'react';
import { useHistory } from 'react-router-dom';
import Date from '@utils/date';
import { CalendarIcon } from '@primer/octicons-react';
import S from './style';

function Milestone({ milestone, handleStatusClick, handleDeleteClick }) {
  const history = useHistory();

  const openIssueCnt = milestone.issues.filter(issue => issue.status === 0).length;
  const closeIssueCnt = milestone.issues.filter(issue => issue.status === 1).length;

  const handleEditClick = () => {
    history.push({
      pathname: `/milestone/edit/${milestone.id}`,
      state: { milestone }
    });
  };

  return (
    <S.MilestoneWrapper>
      <S.Left>
        <S.Title>{milestone.title}</S.Title>
        <S.DateWrapper>
          <CalendarIcon />
          <S.Date>{
            milestone.due_date
              ? 'Due by ' + Date.getDate(milestone.due_date, { day: 'numeric', year: 'numeric', month: 'long' })
              : 'No due date'
          }</S.Date>
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
          <S.Button onClick={handleEditClick}>Edit</S.Button>
          <S.Button onClick={() => handleStatusClick(milestone.id, milestone.status)}>{
            milestone.status === 'open' ? 'Close' : 'Open'
          }</S.Button>
          <S.Button className='delete-btn' onClick={() => handleDeleteClick(milestone.id)}>Delete</S.Button>
        </S.ButtonWrapper>
      </S.Right>
    </S.MilestoneWrapper>
  );
}

export default Milestone;