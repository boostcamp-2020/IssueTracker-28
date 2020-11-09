import React from 'react';
import Input from './input';
import BS from '@components/issues/IssueHeader/Buttons/style';
import S from './style';

function NewMilestone() {
  return (
    <S.NewMilestoneWrapper>
      <S.Header>
        <S.HeaderTitle>New milestone</S.HeaderTitle>
        <S.HeaderContent>Create a new milestone to help organize your issues and pull requests. Learn more about <a href='https://guides.github.com/features/issues/'>milestones and issues.</a></S.HeaderContent>
      </S.Header>
      <Input />
      <S.ButtonWrapper>
        <BS.NewIssueButton>Create milestone</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.NewMilestoneWrapper>
  );
};

export default NewMilestone;