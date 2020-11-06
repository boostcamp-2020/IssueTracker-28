import React, { useEffect } from 'react';

import { MilestoneIcon } from '@primer/octicons-react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import { useHistory } from 'react-router-dom';
import S from './style';

function MilestonesButton() {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();
  const history = useHistory();

  const { data } = state.milestones;

  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const milestones = data?.milestones;

  return (
    <S.MilestonesButton onClick={() => history.push('/milestone')}>
      <MilestoneIcon />
      <S.ButtonText>Milestones</S.ButtonText>
      <S.ShowTotalNum>{milestones ? milestones.length : 0}</S.ShowTotalNum>
    </S.MilestonesButton>
  );
}

export default MilestonesButton;
