import React from 'react';
import { useHistory } from "react-router-dom";
import S from '@components/issues/IssueHeader/Buttons/style';
import {
  InputWrapper,
  InputTitle,
  WriteWrapper,
  WriteTitle,
  Line,
  InputComment,
  InputPicture,
  ButtonWrapper,
  CancelButton,
  SubmitButton
} from './style';

function Input() {
  const history = useHistory();
  return (
    <InputWrapper>
      <InputTitle placeholder='Title' />
      <WriteWrapper>
        <WriteTitle>Write</WriteTitle>
        <Line />
        <InputComment placeholder='Leave a comment' />
        <InputPicture>Attach files by selecting here</InputPicture>
      </WriteWrapper>
      <ButtonWrapper>
        <CancelButton onClick={() => history.push('/')}>Cancel</CancelButton>
        <S.NewIssueButton>Submit new issue</S.NewIssueButton>
      </ButtonWrapper>
    </InputWrapper >
  );
}

export default Input;