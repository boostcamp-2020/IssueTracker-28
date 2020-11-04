import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import S from '@components/issues/IssueHeader/Buttons/style';
import axios from 'axios';
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
  LabelPicture,
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
  const imageHandler = ({ target }) => {
    if (target.files !== null) {
      const fd = new FormData();
      fd.append('filename', target.files[0]);
      axios
        .post(`/api/upload/test`, fd, {
          headers: { 'Content-Type': 'multipart/form-data;charset=utf-8;' },
        })
        .then((res) => {
          setComment(comment + res.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
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
          <LabelPicture for="upload_image">Attach files by selecting here</LabelPicture>
          <InputPicture type="file" id="upload_image" accept="image/png" onChange={imageHandler} />
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
