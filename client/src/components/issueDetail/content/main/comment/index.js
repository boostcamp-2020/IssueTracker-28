import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmileyIcon } from '@primer/octicons-react';
import InputForm from '@components/input/form';
import Button from '@components/issues/header/buttons/style';
import Preview from '@components/input/preview';
import getElapsedTime from '@utils/getElapsedTime';
import { Dropdown } from 'semantic-ui-react';
import * as issueAPI from '@api/issue';
import * as commentAPI from '@api/comment';
import EmptyUserPic from '@images/empty-user.png';
import {
  useIssueDetailDispatch,
  updateComment,
  updateIssueContent,
} from '@contexts/IssueDetailContext';
import S from './style';

const Comment = ({ isIssue, issueAuthor, issue, issueID }) => {
  const history = useHistory();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [comment, setComment] = useState(issue.content);
  const dispatch = useIssueDetailDispatch();
  const editHandler = () => {
    setIsEditClicked(!isEditClicked);
  };
  const deleteHandler = () => {
    const deleteFlag = confirm('Are you sure you want to delete this?');
    if (deleteFlag) {
      isIssue ? issueAPI.deleteIssue(issue.id) : commentAPI.deleteComment(issue.id);
      history.push(`/`);
    }
  };
  const updateCommentHandler = async () => {
    await updateComment(dispatch, issue.id, issueID, comment);
  };
  const updateIssueHandler = async () => {
    await updateIssueContent(dispatch, issue.id, comment);
  };
  const isIssueAuthor = isIssue || issueAuthor === issue.author?.userId;
  const isCommentAuthor = issue.author?.userId === localStorage.getItem('user_id');
  return (
    <>
      <S.FlexWrapper>
        <S.Profile src={issue.author.profileImg ? issue.author.profileImg : EmptyUserPic} />
        <S.Triangle backgroundColor={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'} />
        {isEditClicked !== true ? (
          <S.CommentsWrapper>
            <S.TitleWrapper
              backgroundColor={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'}
            >
              <S.AuthorInfo>
                <S.TitleAuthor>{issue.author.userId}</S.TitleAuthor>
                <S.TitleTime>commented {getElapsedTime(issue.time)} ago</S.TitleTime>
              </S.AuthorInfo>
              <S.WriterInfo>
                {isCommentAuthor && (
                  <S.WriterAuthor>{isIssueAuthor === true ? 'Owner' : 'Author'}</S.WriterAuthor>
                )}
                <SmileyIcon size={14} />
                {isCommentAuthor && (
                  <Dropdown text="Edit">
                    <Dropdown.Menu direction="left">
                      <Dropdown.Item text="Edit" onClick={editHandler} />
                      <Dropdown.Item text="Delete" onClick={deleteHandler} />
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </S.WriterInfo>
            </S.TitleWrapper>
            <S.CommentsContent>
              <Preview comment={issue.content} />
            </S.CommentsContent>
          </S.CommentsWrapper>
        ) : (
          <S.InputWrappers wrapperHeight="250px">
            <InputForm
              formHeight="58%"
              color={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'}
              comment={comment}
              setComment={setComment}
              buttonState={isIssue === true ? 'Update Issue' : 'Update comment'}
              previewWrapper="73%"
            />
            {isIssue === true ? (
              <S.ButtonWrapper justifyContent="flex-end">
                <S.EditCancelButton onClick={editHandler}>Cancel</S.EditCancelButton>
                <Button.IssueDetailButton isValid={comment && true} onClick={updateIssueHandler}>
                  Update Issue
                </Button.IssueDetailButton>
              </S.ButtonWrapper>
            ) : (
              <S.ButtonWrapper justifyContent="flex-end">
                <S.EditCancelButton onClick={editHandler}>Cancel</S.EditCancelButton>
                <Button.IssueDetailButton isValid={comment && true} onClick={updateCommentHandler}>
                  Update Comment
                </Button.IssueDetailButton>
              </S.ButtonWrapper>
            )}
          </S.InputWrappers>
        )}
      </S.FlexWrapper>
      <S.VerticalLine />
    </>
  );
};

export default Comment;
