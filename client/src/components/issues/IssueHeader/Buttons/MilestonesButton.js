import React, { useEffect } from 'react';
import S from './style';
import {MilestoneIcon} from '@primer/octicons-react'
import { useMilestonesState, useMilestonesDispatch, getMilestones } from '@contexts/MilestonesContext';

function MilestonesButton (){
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const { data: milestones, loading, error } = state.milestones;

  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

    return (
        <S.MilestonesButton>
          <MilestoneIcon />
            <S.ButtonText>Milestones</S.ButtonText>
          <S.ShowTotalNum>{milestones ? milestones.milestones.length : 0}</S.ShowTotalNum>
        </S.MilestonesButton>
    );
};

export default MilestonesButton;
