import React, { useState } from 'react';
import InputForm from '@components/input/form';
import Comment from './Comment';
import S from './style';
import Button from '@components/issues/IssueHeader/Buttons/style';
import { StateLabel, IssueClosedIcon } from '@primer/octicons-react';
import axios from 'axios';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  const statusHandler = () => {
    // todo  : 상태 업데이트 만들기
    // axios
    //   .post(`/api/upload/test`, fd, {
    //     headers: { 'Content-Type': 'multipart/form-data;charset=utf-8;' },
    //   })
    //   .then((res) => {
    //     const imgPath = `${'\n' + '[img : '}${res.data}]`;
    //     setComment(comment + imgPath);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };
  const updateHandler = () => {};
  return (
    <>
      <Comment isIssue={true} issue={issue} />
      {comments.map((comment, index) => {
        return (
          <Comment key={index} issueAuthor={issue.issueAuthor} isIssue={false} issue={comment} />
        );
      })}
      <S.InputFormWrapper>
        <InputForm
          formHeight="60%"
          color="rgb(250,251,252)"
          buttonState="NEW_COMMENT"
          comment={newComment}
          setComment={setNewComment}
        />
        <S.ButtonWrapper justifyContent="flex-end">
          <S.EditCancelButton onClick={statusHandler}>
            {issue.status === 'open' ? (
              <div>
                <StateLabel size={16} />
                <span>Open Issue</span>
              </div>
            ) : (
              <div>
                <IssueClosedIcon size={16} />
                <span>Closed Issue</span>
              </div>
            )}
          </S.EditCancelButton>
          <Button.NewIssueButton onClick={updateHandler}>Update Comment</Button.NewIssueButton>
        </S.ButtonWrapper>
      </S.InputFormWrapper>
    </>
  );
};

export default MainContent;
