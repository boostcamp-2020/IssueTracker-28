import React, {useState} from 'react';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Header({isCreateState, setIsCreateState}) {
  const handleIsCreate=()=>{
    setIsCreateState(!isCreateState);
  }

  return (
    <S.LabelHeader>
      <S.LabelMilestone>
        <S.LabelsButton>
          <TagIcon size={14} />
          <S.ButtonText>Labels</S.ButtonText>
        </S.LabelsButton>
        <S.MilestonesButton>
          <MilestoneIcon />
          <S.ButtonText>Milestones</S.ButtonText>
        </S.MilestonesButton>
      </S.LabelMilestone>
      <S.NewLabelButton onClick={handleIsCreate}>New Label</S.NewLabelButton>
    </S.LabelHeader>
  );
}

export default Header;
