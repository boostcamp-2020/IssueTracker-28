import React from 'react';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Header() {
  return (
    <S.MilestoneHeader>
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
      <S.NewMilestoneButton>New Milestone</S.NewMilestoneButton>
    </S.MilestoneHeader>
  );
}

export default Header;
