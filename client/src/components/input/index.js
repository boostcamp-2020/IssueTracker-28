import React, { useState } from 'react';
import S from './style';
import InputForm from './InputForm/index';

function Input() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <S.InputWrapper>
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
