import React from 'react';
import S from './style';

function Input({ handleTitle, handleDescription }) {
  return (
    <S.InputWrapper>
      <S.Title>Title</S.Title>
      <S.InputTitle className='form-control' placeholder='Title' onChange={handleTitle} />
      <S.Title>Due Date (optional)</S.Title>
      <S.InputDate className='form-control input-date' type='date' />
      <S.Title>Description (optional)</S.Title>
      <S.InputDescription className='form-control' onChange={handleDescription} />
    </S.InputWrapper>
  );
};

export default Input;