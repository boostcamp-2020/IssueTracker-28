import React from 'react';
import { CalendarIcon } from '@primer/octicons-react';
import S from './style';

function Label({label}) {
  console.log('label ::::: ', label)


  return (
    <S.LabelWrapper>
      <S.LabelItemWrapper>
        <S.LabelItem color={label.color}>{label.name}</S.LabelItem>
      </S.LabelItemWrapper>
  <S.DescWrapper>{label.desc}</S.DescWrapper>
      <S.ButtonsWrapper>
        <S.EditButton className="label-button-item">Edit</S.EditButton>
        <S.DeleteButton className="label-button-item">Delete</S.DeleteButton>
      </S.ButtonsWrapper>
    </S.LabelWrapper>
  );
}

export default Label;