import React, { useState } from 'react';
import InputForm from '@components/input/form';
import Comment from './Comment';
import S from './style';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  return (
    <>
      <Comment isIssue={true} issue={issue} />
      {comments.map((comment, index) => {
        <Comment key={index} issueAuthor={issue.issueAuthor} isIssue={false} issue={comment} />;
      })}
      {/* <Comment
        issueAuthor="sang-gyeong"
        author="sang-gyeong"
        createdAt="5 days ago"
        isOwner
        content="테스트"
      /> */}
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
