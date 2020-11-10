import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BS from '@components/issues/header/buttons/style';
import Input from '@components/newMilestone/input';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import MS from '@components/milestones/header/style';
import S from './style';

function EditMilestone() {
  const history = useHistory();
  const location = useLocation();
  const { milestone } = location.state;

  return (
    <S.EditMilestoneWrapper>
      <S.Header>
        <MS.LabelMilestone>
          <MS.LabelsButton onClick={() => history.push('/label')}>
            <TagIcon size={14} />
            <MS.ButtonText>Labels</MS.ButtonText>
          </MS.LabelsButton>
          <MS.MilestonesButton onClick={() => history.push('/milestone')}>
            <MilestoneIcon />
            <MS.ButtonText>Milestones</MS.ButtonText>
          </MS.MilestonesButton>
        </MS.LabelMilestone>
      </S.Header>
      <Input />
      <S.ButtonWrapper>
        <S.CancelButton>Cancel</S.CancelButton>
        <S.CancelButton>Close milestone</S.CancelButton>
        <BS.NewIssueButton>Create milestone</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.EditMilestoneWrapper>
  );
}

export default EditMilestone;
