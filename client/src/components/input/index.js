import React, { useState } from 'react';
import S from './style';
import Button from '@components/issues/IssueHeader/Buttons/style';
import { useHistory } from 'react-router-dom';
import InputForm from './form';
import axios from 'axios';

function Input({ selectedAssignees, selectedLabels, selectedMilestone }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const submitHandler = () => {
    console.log(selectedAssignees, selectedLabels, selectedMilestone);
    console.log(title, content);
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
      <S.InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <S.InputFormWrapper wrapperHeight="400px">
        <InputForm
          formHeight="79%"
          color="white"
          buttonState="NEW_ISSUE"
          comment={content}
          setComment={setContent}
        />
      </S.InputFormWrapper>
      <S.ButtonWrapper justifyContent="space-between">
        <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
        <Button.NewIssueButton onClick={submitHandler}>Submit new issue</Button.NewIssueButton>
      </S.ButtonWrapper>
    </S.InputWrapper>
  );
}

export default Input;
