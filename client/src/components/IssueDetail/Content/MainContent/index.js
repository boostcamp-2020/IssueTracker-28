import React, { useEffect, useState } from 'react';
import InputForm from '@components/input/form';
import Button from '@components/issues/header/buttons/style';
import { IssueOpenedIcon, IssueClosedIcon } from '@primer/octicons-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import S from './style';
import Comment from './Comment';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  const [updateStatus, setUpdateStatus] = useState(false);
  const [createComment, setCreateComment] = useState(false);
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
    console.log('update: ', updateStatus);
  };
  const createHandler = () => {
    const body = {
      content: newComment,
      issue: issue.id,
      user: localStorage.getItem('user_id'),
    };
    axios
      .post(`/api/comment`, body)
      .then((res) => {
        console.log('res: ', res);
        // Todo : 새로고침 구현
        // history.push(`/detail/${issue.id}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <Comment isIssue issue={issue} />
      {comments.map((comment, index) => {
        return (
          <Comment key={index} issueAuthor={issue.issueAuthor} isIssue={false} issue={comment} />
        );
      })}
      <S.FlexWrapper>
        <S.Profile src="https://issue.kr.object.ncloudstorage.com/1604932511555.png" />
        <S.Triangle backgroundColor="rgb(241,248,255)" />
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
            <Button.NewIssueButton onClick={createHandler}>Comment</Button.NewIssueButton>
          </S.ButtonWrapper>
        </S.InputFormWrapper>
      </S.FlexWrapper>
    </>
  );
};

export default MainContent;
