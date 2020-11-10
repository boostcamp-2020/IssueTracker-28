import React, { useEffect, useState } from 'react';
import InputForm from '@components/input/form';
import Comment from './Comment';
import S from './style';
import Button from '@components/issues/header/Buttons/style';
import { IssueOpenedIcon, IssueClosedIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';
import * as issueAPI from '@api/issue';
import * as commentAPI from '@api/comment';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  const [updateStatus, setUpdateStatus] = useState(false);
  const [createComment, setCreateComment] = useState(false);
  const history = useHistory();
  const statusHandler = async () => {
    const status = issue.status === 'opened' ? 1 : 0;
    const { data } = await issueAPI.updateIssueStatus(issue.id, status);
    console.log('update: ', data);
  };
  const createHandler = async () => {
    const { data } = await commentAPI.createComment(newComment, issue.id);
    console.log('create: ', data);
  };
  return (
    <S.MainContentWrapper>
      <Comment isIssue={true} issue={issue} />
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
    </S.MainContentWrapper>
  );
};

export default MainContent;
