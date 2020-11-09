import React from 'react';
import { useHistory } from 'react-router-dom';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Header({isCreateState, setIsCreateState}) {
  const history = useHistory();
  const handleIsCreate=()=>{
    setIsCreateState(!isCreateState);
  }
  return (
    <S.LabelHeader>
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
      <S.NewLabelButton onClick={handleIsCreate}>New Label</S.NewLabelButton>
    </S.LabelHeader>
  );
}

export default Header;
