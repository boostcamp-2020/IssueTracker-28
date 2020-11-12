import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useMilestonesState,
  useMilestonesDispatch,
  createMilestone,
} from '@contexts/MilestonesContext';
import Input from './input';
import S from './style';

function NewMilestone() {
  const history = useHistory();
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { data } = state.milestones;
  const milestones = data?.milestones;

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleClick = () => {
    const inputDate = document.querySelector('.input-date').value;

    if (title.length === 0) return;
    if (milestones) {
      let flag = true;
      milestones.forEach((milestone) => {
        if (milestone.title === title) flag = false;
      });
      if (!flag) alert('중복된 title입니다.');
      else {
        createMilestone(dispatch, {
          status: 0,
          title,
          dueDate: inputDate,
          desc: description,
        });

        history.push('/milestone');
      }
    }
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
        <S.CancelButton onClick={() => history.push('/milestone')}>Cancel</S.CancelButton>
        <S.SubmitButton isValid={title.length > 0} onClick={handleClick}>
          Create milestone
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.NewMilestoneWrapper>
  );
}

export default NewMilestone;
