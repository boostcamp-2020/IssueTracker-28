import React, { useState } from 'react';
import InputForm from '@components/input/form';
import BS from '@components/issues/header/buttons/style';
import { IssueClosedIcon } from '@primer/octicons-react';
import {
  useIssueDetailDispatch,
  updateIssueStatus,
  createComment,
} from '@contexts/IssueDetailContext';
import EmptyUserPic from '@images/empty-user.png';
import S from './style';
import Comment from './comment';

const MainContent = ({ issue, comments }) => {
  const [newComment, setNewComment] = useState('');
  const dispatch = useIssueDetailDispatch();

  const statusHandler = async () => {
    const status = issue.status === 'opened' ? 1 : 0;
    await updateIssueStatus(dispatch, issue.id, status);
  };
  const createHandler = async () => {
    await createComment(dispatch, issue.id, newComment);
  };

  return (
    <S.MainContentWrapper>
      <Comment isIssue issue={issue} />
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            issueAuthor={issue.author.userId}
            isIssue={false}
            issue={comment}
            issueID={issue.id}
          />
        );
      })}
      <S.FlexWrapper>
        <S.Profile src={EmptyUserPic} />
        <S.Triangle backgroundColor="rgb(250,251,252)" />
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
                <>
                  <IssueClosedIcon size={16} />
                  <span style={{ marginLeft: '4px', color: 'black' }}>Closed Issue</span>
                </>
              ) : (
                  <span style={{ color: 'black' }}>Reopen Issue</span>
                )}
            </S.EditCancelButton>

            <BS.IssueDetailButton isValid={newComment && true} onClick={createHandler}>
              Comment
            </BS.IssueDetailButton>
          </S.ButtonWrapper>
        </S.InputFormWrapper>
      </S.FlexWrapper>
    </S.MainContentWrapper>
  );
};

export default MainContent;
