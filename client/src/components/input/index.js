import React, { useState } from 'react';
import Button from '@components/issues/header/buttons/style';
import { useHistory } from 'react-router-dom';
import EmptyUserPic from '@images/empty-user.png';
import InputForm from './form';
import S from './style';
import * as api from '@api/issue';

function Input({ selectedAssignees, selectedLabels, selectedMilestone }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const submitHandler = async () => {
    const { data } = await api.createIssue(
      title,
      content,
      selectedMilestone,
      selectedAssignees,
      selectedLabels,
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
