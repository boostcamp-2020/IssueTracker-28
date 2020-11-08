import React from 'react';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';
import S from './style';

function Header() {
  const history = useHistory();
  return (
    <S.MilestoneHeader>
      <S.LabelMilestone>
        <S.LabelsButton onClick={()=>history.push('/label')}>
          <TagIcon size={14} />
          <S.ButtonText>Labels</S.ButtonText>
        </S.LabelsButton>
        <S.MilestonesButton onClick={()=>history.push('/milestone')}>
          <MilestoneIcon />
          <S.ButtonText>Milestones</S.ButtonText>
        </S.MilestonesButton>
      </S.LabelMilestone>
      <S.NewMilestoneButton>New Milestone</S.NewMilestoneButton>
    </S.MilestoneHeader>
  );
}

export default Header;
