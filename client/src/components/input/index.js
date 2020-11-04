import React from 'react';
import { useHistory } from "react-router-dom";
import BS from '@components/issues/IssueHeader/Buttons/style';
import S from './style';

function Input() {
  const history = useHistory();
  return (
    <S.InputWrapper>
      <S.InputTitle placeholder='Title' />
      <S.WriteWrapper>
        <S.WriteTitle>Write</S.WriteTitle>
        <S.Line />
        <S.InputComment placeholder='Leave a comment' />
        <S.InputPicture>Attach files by selecting here</S.InputPicture>
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
        <BS.NewIssueButton>Submit new issue</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.InputWrapper >
  );
}

export default Input;