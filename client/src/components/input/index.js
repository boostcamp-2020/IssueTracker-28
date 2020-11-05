import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import BS from '@components/issues/IssueHeader/Buttons/style';
import S from './style';

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
    <S.InputWrapper>
      <S.InputTitle placeholder='Title' value={title} onChange={titleHandler} />
      <S.WriteWrapper>
        <S.WriteTitle>Write</S.WriteTitle>
        <S.WritePreview>Preview</S.WritePreview>
        <S.Line />
        <S.InputComment
          placeholder="Leave a comment"
          value={comment}
          onChange={commentHandler}
          onKeyUp={keyUpEvent}
        />
        <S.AttachWrapper>
          <S.LabelPicture for="upload_image">Attach files by selecting here</S.LabelPicture>
          <S.InputPicture type="file" id="upload_image" accept="image/png" onChange={imageHandler} />
          <S.CountComments>{isDelay && comment.length + ' 자'} </S.CountComments>
        </S.AttachWrapper>
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
        <BS.NewIssueButton>Submit new issue</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.InputWrapper >
  );
}

export default Input;
