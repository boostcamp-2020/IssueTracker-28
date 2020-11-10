import React, { useState, useEffect } from 'react';
import { SmileyIcon } from '@primer/octicons-react';
import InputForm from '@components/input/form';
import S from './style';
import Button from '@components/issues/header/Buttons/style';
import * as issueAPI from '@api/issue';
import * as commentAPI from '@api/comment';

const Comment = ({ isIssue, issueAuthor, issue }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [comment, setComment] = useState(issue.content);
  const re = /\[.*\]\^\(.*\)/i;
  const editHandler = () => {
    setIsEditClicked(!isEditClicked);
  };
  const updateCommentHandler = async () => {
    const { data } = await commentAPI.updateComment(issue.id, comment);
  };
  const updateIssueHandler = async () => {
    const { data } = await issueAPI.updateIssueContent(issue.id, comment);
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
                <S.TitleTime>commented {issue.createdAt}</S.TitleTime>
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
              {issue.content.split('!').map((cur, i) => {
                console.log('cur: ', cur);
                console.log('cur: ', re.test(cur));
                if (re.test(cur)) {
                  let [imgName, imgPath] = cur.split('^');
                  imgName = imgName.replace(/\[|\]|\s*/gi, '');
                  imgPath = imgPath.replace(/\(|\)|\s*/gi, '');
                  return <S.ImgLink href={imgPath}>{imgName}</S.ImgLink>;
                } else if (cur === '') {
                  return ``;
                } else {
                  return <span>{cur}</span>;
                }
              })}
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
                <Button.NewIssueButton onClick={updateIssueHandler}>
                  Update Issue
                </Button.NewIssueButton>
              </S.ButtonWrapper>
            ) : (
              <S.ButtonWrapper justifyContent="flex-end">
                <S.EditCancelButton onClick={editHandler}>Cancel</S.EditCancelButton>
                <Button.NewIssueButton onClick={updateCommentHandler}>
                  Update Comment
                </Button.NewIssueButton>
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
