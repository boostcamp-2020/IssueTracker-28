import React from 'react';
import S from './style';
import { SmileyIcon } from '@primer/octicons-react';
const Comment = ({ author, createdAt, isOwner, content }) => {
  return (
    <>
      <S.CommentsWrapper>
        <S.TitleWrapper>
          <S.AuthorInfo>
            <S.TitleAuthor>{author}</S.TitleAuthor>
            <S.TitleTime>commented {createdAt}</S.TitleTime>
          </S.AuthorInfo>
          <S.WriterInfo>
            <S.WriterAuthor>{isOwner && 'Owner'}</S.WriterAuthor>
            <SmileyIcon size={14} />
            <S.EditButton>{isOwner && 'Edit'}</S.EditButton>
          </S.WriterInfo>
        </S.TitleWrapper>
        <S.CommentsContent>{content}</S.CommentsContent>
      </S.CommentsWrapper>
    </>
  );
};

export default Comment;
