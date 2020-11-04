import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  SubmitButton,
  AttachWrapper,
  WritePreview,
  CountComments,
} from './style';

function Input() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const commentHandler = ({ target }) => {
    setComment(target.value);
  };
  return (
    <InputWrapper>
      <InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <WriteWrapper>
        <WriteTitle>Write</WriteTitle>
        <WritePreview>Preview</WritePreview>
        <Line />
        <InputComment placeholder="Leave a comment" value={comment} onChange={commentHandler} />
        <AttachWrapper>
          <InputPicture>Attach files by selecting here</InputPicture>
          <CountComments>{comment.length} 자</CountComments>
        </AttachWrapper>
      </WriteWrapper>
      <ButtonWrapper>
        <CancelButton onClick={() => history.push('/')}>Cancel</CancelButton>
        <S.NewIssueButton>Submit new issue</S.NewIssueButton>
      </ButtonWrapper>
    </InputWrapper>
  );
}

export default Input;
