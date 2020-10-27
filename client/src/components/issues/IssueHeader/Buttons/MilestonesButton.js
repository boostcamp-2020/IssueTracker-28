import React from 'react';
import S from './style';
import {MilestoneIcon} from '@primer/octicons-react'

function MilestonesButton (){
    return (
        <S.MilestonesButton>
          <MilestoneIcon />
          Milestones
          <S.ShowTotalNum>0</S.ShowTotalNum>
        </S.MilestonesButton>
    );
};

export default MilestonesButton;
