import React, { useState } from 'react';
import InputForm from '@components/input/form';
import Comment from './Comment';
import S from './style';
import Button from '@components/issues/IssueHeader/Buttons/style';
import { IssueOpenedIcon, IssueClosedIcon } from '@primer/octicons-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  const history = useHistory();
  const statusHandler = () => {
    const status = issue.status === 'opened' ? 1 : 0;
    const body = {
      ids: issue.id,
      status,
    };
    axios
      .put(`/api/issue/status`, body)
      .then((res) => {
        console.log('res: ', res);
        // Todo : 새로고침 구현
        // history.push(`/detail/${issue.id}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
            {issue.status === 'opened' ? (
              <div>
                <IssueOpenedIcon size={16} />
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
