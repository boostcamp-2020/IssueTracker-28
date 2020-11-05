import styled from 'styled-components';

export default {
  CommentsWrapper: styled.div`
    margin-top: 16px;
    width: 70%;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
    margin-left: 30px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid rgb(225, 228, 232);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: rgb(241, 248, 255);
  `,
  AuthorInfo: styled.div`
    display: flex;
  `,
  WriterInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  TitleAuthor: styled.div`
    margin-right: 5px;
    font-weight: bold;
  `,
  TitleTime: styled.div``,
  WriterAuthor: styled.div`
    margin-right: 10px;
  `,
  EditButton: styled.div`
    margin-left: 10px;
    cursor: pointer;
  `,
  CommentsContent: styled.div`
    height: 80px;
    padding: 10px;
  `,
};
