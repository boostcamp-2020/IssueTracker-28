import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import S from './style';

function Header({isVisible, setIsVisible}) {
  const history = useHistory();
  const handleIsVisible=()=>{
    setIsVisible(!isVisible);
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
      <S.NewLabelButton onClick={handleIsVisible}>New Label</S.NewLabelButton>
    </S.LabelHeader>
  );
}

export default Header;
