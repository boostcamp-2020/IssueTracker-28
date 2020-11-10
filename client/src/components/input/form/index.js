import React, { useState } from 'react';
import S from './style';
import * as api from '@api/upload';

const InputForm = ({ formHeight, color, buttonState, comment, setComment }) => {
  let timer;

  const [isDelay, setIsDelay] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const commentHandler = ({ target }) => {
    setIsDelay(false);
    setComment(target.value);
  };

  const imageHandler = async ({ target }) => {
    if (target.files !== null) {
      const fd = new FormData();
      fd.append('filename', target.files[0]);
      const data = await api.imageUpload(fd);
      const imgPath = '\n' + '![img]^(' + `${data}` + ')!';
      setComment(comment + imgPath);
    }
  };

  const tabHandler = (e) => {
    setIsSelected(!isSelected);
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
        <S.WriteTitle className="comment-tab" isSelected={isSelected} onClick={tabHandler}>
          Write
        </S.WriteTitle>
        <S.WritePreview className="comment-tab" isSelected={!isSelected} onClick={tabHandler}>
          Preview
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
        <S.LabelPicture htmlFor={buttonState}>Attach files by selecting here</S.LabelPicture>
        <S.InputPicture type="file" id={buttonState} accept="image/png" onChange={imageHandler} />
        <S.CountComments>{isDelay && `${comment.length} 자`} </S.CountComments>
      </S.AttachWrapper>
    </S.WriteWrapper>
  );
};

export default InputForm;
