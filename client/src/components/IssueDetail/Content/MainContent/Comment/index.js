import React, { useState } from 'react';
import { SmileyIcon } from '@primer/octicons-react';
import InputForm from '@components/input/form';
import S from './style';
import Button from '@components/issues/header/Buttons/style';
import Preview from '@components/input/preview';
import getElapsedTime from '@utils/getElapsedTime';
import {
  useIssueDetailDispatch,
  updateComment,
  updateIssueContent,
} from '@contexts/IssueDetailContext';

const Comment = ({ isIssue, issueAuthor, issue, issueID }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [comment, setComment] = useState(issue.content);
  const dispatch = useIssueDetailDispatch();
  const re = /\[.*\]\^\(.*\)/i;
  const editHandler = () => {
    setIsEditClicked(!isEditClicked);
  };
  const updateCommentHandler = async () => {
    await updateComment(dispatch, issue.id, issueID, comment);
  };
  const updateIssueHandler = async () => {
    await updateIssueContent(dispatch, issue.id, comment);
  };

  const isIssueAuthor = isIssue || issueAuthor === issue.author;
  const isCommentAuthor = issue.author === localStorage.getItem('user_id');
  return (
    <>
      <S.FlexWrapper>
        <S.Profile src="https://issue.kr.object.ncloudstorage.com/1604932511555.png" />
        <S.Triangle backgroundColor={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'} />

        {isEditClicked !== true ? (
          <S.CommentsWrapper>
            <S.TitleWrapper
              backgroundColor={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'}
            >
              <S.AuthorInfo>
                <S.TitleAuthor>{issue.author}</S.TitleAuthor>
                <S.TitleTime>commented {getElapsedTime(issue.time)} ago</S.TitleTime>
              </S.AuthorInfo>
              <S.WriterInfo>
                {isCommentAuthor && (
                  <S.WriterAuthor>{isIssueAuthor === true ? 'Owner' : 'Author'}</S.WriterAuthor>
                )}
                <SmileyIcon size={14} />
                {isCommentAuthor && <S.EditButton onClick={editHandler}>Edit</S.EditButton>}
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
