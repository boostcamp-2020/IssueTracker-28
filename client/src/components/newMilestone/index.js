import React, { useState } from 'react';
import { useMilestonesDispatch } from '@contexts/MilestonesContext';
import BS from '@components/issues/header/buttons/style';
import Input from './input';
import S from './style';

function NewMilestone() {
  const dispatch = useMilestonesDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleClick = () => {
    /** @todo POST milestone */
  };

  return (
    <S.NewMilestoneWrapper>
      <S.Header>
        <S.HeaderTitle>New milestone</S.HeaderTitle>
        <S.HeaderContent>
          Create a new milestone to help organize your issues and pull requests. Learn more about{' '}
          <a href="https://guides.github.com/features/issues/">milestones and issues.</a>
        </S.HeaderContent>
      </S.Header>
      <Input handleTitle={handleTitle} handleDescription={handleDescription} />
      <S.ButtonWrapper>
        <BS.NewIssueButton onClick={handleClick}>Create milestone</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.NewMilestoneWrapper>
  );
}

export default NewMilestone;
