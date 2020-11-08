import React, { useState } from 'react';
import axios from 'axios';
import S from './style';
import ButtonWrapper from './buttonWrapper';

const InputForm = ({
  formHeight,
  color,
  buttonState,
  comment,
  setComment,
  isEditClicked,
  setIsEditClicked,
}) => {
  let timer;

  const [isDelay, setIsDelay] = useState(false);
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
          const imgPath = `${'\n' + '[img : '}${res.data}]`;
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
    <S.WriteWrapper>
      <S.TitleBackground color={color}>
        <S.WriteTitle>
          <S.CommentTabButton>Write</S.CommentTabButton>
        </S.WriteTitle>
        <S.WritePreview>
          <S.CommentTabButton>Preview</S.CommentTabButton>
        </S.WritePreview>
      </S.TitleBackground>
      <S.Line />
      <S.InputDiv formHeight={formHeight}>
        <S.InputComment
          placeholder="Leave a comment"
          value={comment}
          onChange={commentHandler}
          onKeyUp={keyUpEvent}
        />
      </S.InputDiv>
      <S.AttachWrapper>
        <S.LabelPicture for="upload_image">Attach files by selecting here</S.LabelPicture>
        <S.InputPicture type="file" id="upload_image" accept="image/png" onChange={imageHandler} />
        <S.CountComments>{isDelay && `${comment.length} 자`} </S.CountComments>
      </S.AttachWrapper>
      {ButtonWrapper(buttonState, isEditClicked, setIsEditClicked)}
    </S.WriteWrapper>
  );
};

export default InputForm;
