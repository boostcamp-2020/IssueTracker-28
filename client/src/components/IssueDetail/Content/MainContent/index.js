import React, { useState } from 'react';
import Comment from './Comment/index';
import InputForm from '@components/input/inputForm';
import S from './style';
const MainContent = ({ author, content, setContent, createdAt, issueAuthor }) => {
  const [newComment, setNewComment] = useState('');
  return (
    <>
      <Comment
        isIssue={true}
        issueAuthor={'dooking'}
        author={'dooking'}
        createdAt={'5 days ago'}
        content={'댓글용'}
      />

      <Comment
        issueAuthor={'dooking'}
        author={'ooking'}
        createdAt={'5 days ago'}
        isOwner={true}
        content={'테스트'}
      />

      <S.InputWrappers wrapperHeight="250px">
        <InputForm
          formHeight="45%"
          color="rgb(250,251,252)"
          buttonState="NEW_COMMENT"
          comment={newComment}
          setComment={setNewComment}
        />
      </S.InputWrappers>
    </>
  );
};

export default MainContent;
