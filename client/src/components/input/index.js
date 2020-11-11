import React, { useEffect, useState } from 'react';
import Button from '@components/issues/header/buttons/style';
import { useHistory } from 'react-router-dom';
import EmptyUserPic from '@images/empty-user.png';
import * as api from '@api/issue';
import { useUsersState, useUsersDispatch } from '@contexts/UsersContext';
import { useLabelState, useLabelDispatch } from '@contexts/LabelContext';
import { useMilestonesState, useMilestonesDispatch } from '@contexts/MilestonesContext';
import S from './style';
import InputForm from './form';

function Input() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { selectedUsers } = useUsersState();
  const { selectedLabels } = useLabelState();
  const { selectedMilestone } = useMilestonesState();
  const usersDispatch = useUsersDispatch();
  const labelsDispatch = useLabelDispatch();
  const milestoneDispatch = useMilestonesDispatch();

  const getAssigneesId = () => {
    return Array.from(selectedUsers).reduce((acc, cur) => {
      acc.push(cur.id);
      return acc;
    }, []);
  };

  const getLabelsId = () => {
    return Array.from(selectedLabels).reduce((acc, cur) => {
      acc.push(cur.id);
      return acc;
    }, []);
  };

  const history = useHistory();

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };

  useEffect(() => {
    usersDispatch({ type: 'UPDATE_SELECTED_USERS', data: new Set() });
    labelsDispatch({ type: 'UPDATE_SELECTED_LABELS', data: new Set() });
    milestoneDispatch({ type: 'UPDATE_SELECTED_MILESTONE', data: null });
  }, []);

  const submitHandler = async () => {
    const milestone = selectedMilestone ? selectedMilestone.id : null;
    const { data } = await api.createIssue(
      title,
      content,
      milestone,
      getAssigneesId(),
      getLabelsId(),
      localStorage.getItem('user_id')
    );
    history.push(`/detail/${data.data}`);
  };

  return (
    <S.InputWrapper>
      <S.AuthorPic src={EmptyUserPic} />
      <S.InputTriangle />
      <S.InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <S.InputFormWrapper wrapperHeight="80%">
        <InputForm
          formHeight="315px"
          color="white"
          buttonState="NEW_ISSUE"
          comment={content}
          setComment={setContent}
        />
      </S.InputFormWrapper>
      <S.ButtonWrapper justifyContent="space-between">
        <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
        <Button.IssueDetailButton isValid={title && true} onClick={submitHandler}>
          Submit new issue
        </Button.IssueDetailButton>
      </S.ButtonWrapper>
    </S.InputWrapper>
  );
}

export default Input;
