import React from 'react';
import S from './style';

function Input() {
  return (
    <S.InputWrapper>
      <S.Title>Title</S.Title>
      <S.InputTitle className='form-control' />
      <S.Title>Due Date (optional)</S.Title>
      <S.InputDate className='form-control' type='date' />
      <S.Title>Description (optional)</S.Title>
      <S.InputDescription className='form-control' />
    </S.InputWrapper>
  );
};

export default Input;