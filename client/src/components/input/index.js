import React, { useState } from 'react';
import S from './style';
import InputForm from './form';
import EmptyUserPic from '@images/empty-user.png'

function Input({ selectedAssignees, selectedLabels, selectedMilestone }) {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <S.InputWrapper>
      <S.AuthorPic src={EmptyUserPic}/>
      <S.InputTriangle/>
      <S.InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <S.InputFormWrapper wrapperHeight="400px">
        <InputForm
          formHeight="65%"
          color="white"
          buttonState="NEW_ISSUE"
          comment={comment}
          setComment={setComment}
        />
      </S.InputFormWrapper>
    </S.InputWrapper>
  );
}

export default Input;
