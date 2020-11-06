import React, { useState } from 'react';
import { SmileyIcon } from '@primer/octicons-react';
import InputForm from '@components/input/form';
import S from './style';

const Comment = ({ isIssue, issueAuthor, author, createdAt, content }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [comment, setComment] = useState(content);

  const editHandler = () => {
    setIsEditClicked(!isEditClicked);
  };

  const isIssueAuthor = issueAuthor === author;
  const isCommentAuthor = author === localStorage.getItem('user_id');
  return (
    <>
      {isEditClicked !== true ? (
        <S.FlexWrapper>
          <S.Triangle />
          <S.CommentsWrapper>
            <S.TitleWrapper
              backgroundColor={isIssueAuthor ? 'rgb(241,248,255)' : 'rgb(250,251,252)'}
            >
              <S.AuthorInfo>
                <S.TitleAuthor>{author}</S.TitleAuthor>
                <S.TitleTime>commented {createdAt}</S.TitleTime>
              </S.AuthorInfo>
              <S.WriterInfo>
                {isCommentAuthor && (
                  <S.WriterAuthor>{isIssueAuthor === true ? 'Owner' : 'Author'}</S.WriterAuthor>
                )}
                <SmileyIcon size={14} />
                {isCommentAuthor && <S.EditButton onClick={editHandler}>Edit</S.EditButton>}
              </S.WriterInfo>
            </S.TitleWrapper>
            <S.CommentsContent>{content}</S.CommentsContent>
          </S.CommentsWrapper>
        </S.FlexWrapper>
      ) : (
        <S.InputWrappers wrapperHeight="250px">
          <InputForm
            formHeight="45%"
            color="rgb(241,248,255)"
            buttonState={isIssue === true ? 'UPDATE_ISSUE' : 'UPDATE_COMMENT'}
            comment={comment}
            setComment={setComment}
            isEditClicked={isEditClicked}
            setIsEditClicked={setIsEditClicked}
          />
        </S.InputWrappers>
      )}
    </>
  );
};

export default Comment;
