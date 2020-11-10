import React, { useState } from 'react';
import Button from '@components/issues/header/buttons/style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import EmptyUserPic from '@images/empty-user.png';
import InputForm from './form';
import S from './style';

function Input({ selectedAssignees, selectedLabels, selectedMilestone }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const submitHandler = () => {
    const body = {
      title,
      content,
      milestone: selectedMilestone,
      assignees: selectedAssignees,
      labels: selectedLabels,
      user: localStorage.getItem('user_id'),
      status: 0,
    };

    axios
      .post(`/api/issue`, body)
      .then((res) => {
        if (res.status === 200) {
          history.push(`/detail/${res.data.data}`);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
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
