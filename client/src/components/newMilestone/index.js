import React from 'react';
import BS from '@components/issues/IssueHeader/Buttons/style';
import S from './style';

function NewMilestone() {
  return (
    <S.NewMilestoneWrapper>
      <S.Header>
        <S.HeaderTitle>New milestone</S.HeaderTitle>
        <S.HeaderContent>Create a new milestone to help organize your issues and pull requests. Learn more about <a href='https://guides.github.com/features/issues/'>milestones and issues.</a></S.HeaderContent>
      </S.Header>
      <S.InputWrapper>
        <S.Title>Title</S.Title>
        <S.InputTitle className='form-control' />
        <S.Title>Due Date (optional)</S.Title>
        <S.InputDate className='form-control' type='date' />
        <S.Title>Description (optional)</S.Title>
        <S.InputDescription className='form-control' />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <BS.NewIssueButton>Create milestone</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.NewMilestoneWrapper>
  );
};

export default NewMilestone;