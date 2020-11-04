import React, { useEffect, useState } from 'react';
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
  let timer;
  let timer2;
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isDelay, setIsDelay] = useState(false);
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const commentHandler = ({ target }) => {
    setIsDelay(false);
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
          const imgPath = '\n' + '[img : ' + res.data + ']';
          setComment(comment + imgPath);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  const keyUpEvent = async () => {
    clearTimeout(timer);
    if (comment) {
      timer = setTimeout(() => {
        setIsDelay(true);
      }, 2000);
    }
  };

  return (
    <InputWrapper>
      <InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <WriteWrapper>
        <WriteTitle>Write</WriteTitle>
        <WritePreview>Preview</WritePreview>
        <Line />
        <InputComment
          placeholder="Leave a comment"
          value={comment}
          onChange={commentHandler}
          onKeyUp={keyUpEvent}
        />
        <AttachWrapper>
          <LabelPicture for="upload_image">Attach files by selecting here</LabelPicture>
          <InputPicture type="file" id="upload_image" accept="image/png" onChange={imageHandler} />
          <CountComments>{isDelay && comment.length + ' 자'} </CountComments>
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
