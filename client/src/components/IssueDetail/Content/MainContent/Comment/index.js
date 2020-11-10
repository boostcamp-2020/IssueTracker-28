import React, { useState, useEffect } from 'react';
import { SmileyIcon } from '@primer/octicons-react';
import InputForm from '@components/input/form';
import EmptyUserPic from '@images/empty-user.png'
import S from './style';
import Button from '@components/issues/IssueHeader/Buttons/style';
import axios from 'axios';

const Comment = ({ isIssue, issueAuthor, issue }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [comment, setComment] = useState(issue.content);
  const re = /\[.*\]\^\(.*\)/i;
  const editHandler = () => {
    setIsEditClicked(!isEditClicked);
  };
  const updateCommentHandler = () => {
    const body = {
      content: comment,
      id: issue.id,
    };
    axios
      .put(`/api/comment`, body)
      .then((res) => {
        console.log('res: ', res);
        // Todo : 새로고침 구현
        // history.push(`/detail/${issue.id}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const updateIssueHandler = () => {
    const body = {
      content: comment,
      ids: issue.id,
    };
    axios
      .put(`/api/issue/content`, body)
      .then((res) => {
        console.log('res: ', res);
        // Todo : 새로고침 구현
        // history.push(`/detail/${issue.id}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
            <S.CommentAuthorPic src={EmptyUserPic} />
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
