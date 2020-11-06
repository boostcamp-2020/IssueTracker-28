import React, { useEffect } from 'react';
import S from './style';
import { MilestoneIcon } from '@primer/octicons-react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';

function MilestonesButton() {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const { data } = state.milestones;

  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const milestones = data?.milestones;

  return (
    <S.MilestonesButton>
      <MilestoneIcon />
      <S.ButtonText>Milestones</S.ButtonText>
      <S.ShowTotalNum>{milestones ? milestones.length : 0}</S.ShowTotalNum>
    </S.MilestonesButton>
  );
}

export default MilestonesButton;
