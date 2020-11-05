import React from 'react';
import { useHistory } from 'react-router-dom';
import S from './style';
import { MilestoneIcon } from '@primer/octicons-react'

function MilestonesButton() {
  const history = useHistory();
  return (
    <S.MilestonesButton onClick={() => history.push('/milestone')}>
      <MilestoneIcon />
      <S.ButtonText>Milestones</S.ButtonText>
      <S.ShowTotalNum>0</S.ShowTotalNum>
    </S.MilestonesButton>
  );
};

export default MilestonesButton;
